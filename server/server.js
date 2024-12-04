const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const path = require("path");
const { authMiddleware } = require("./utils/auth");
const dotenv = require("dotenv");
const http = require("http"); // For creating an HTTP server
const { Server: SocketIOServer } = require("socket.io"); // Imports Socket.IO
const cors = require("cors");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

// Create an HTTP server to use with both Apollo and Socket.IO
const httpServer = http.createServer(app);

// Attach Socket.IO to the HTTP server
const io = new SocketIOServer(httpServer, {
  cors: {
    origin: "*", // Update with your frontend URL in production for security
    methods: ["GET", "POST"],
  },
});

// WebSocket server logic
io.on("connection", (socket) => {
  console.log("A user connected via WebSocket");

  // Load global calendar state from database and send to the connected user
  socket.on("load-state", async () => {
    const calendar = await Calendar.findOne({});
    const state = calendar ? calendar.state : {}; // Get the global state
    socket.emit("load-state", state);
  });

  // Listen for calendar state updates and update the global calendar
  socket.on("update-state", async ({ dateKey, index, state }) => {
    let calendar = await Calendar.findOne({});
    if (!calendar) {
      calendar = new Calendar({ state: {} }); // Initialize global state if not exists
    }

    if (!calendar.state[dateKey]) {
      calendar.state[dateKey] = {};
    }
    calendar.state[dateKey][index] = state;

    // Save the updated global state to the database
    await calendar.save();

    // Broadcast the update to all connected clients (no userId, global)
    io.emit("state-updated", { dateKey, index, state });
  });

  // Handle user disconnects
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

// Apollo Server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    user: req.user || null, // Include user context if using authentication
  }),
});

// Start Apollo Server and integrate it with Express
const startApolloServer = async () => {
  await server.start();

  app.use(cors());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Serve up static assets
  app.use("/images", express.static(path.join(__dirname, "../client/public/images")));

  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: authMiddleware,
    })
  );

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/dist/index.html"));
    });
  }

  // Start the database and HTTP server
  db.once("open", () => {
    httpServer.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`GraphQL endpoint available at http://localhost:${PORT}/graphql`);
      console.log(`WebSocket server running on port ${PORT}`);
    });
  });
};

// Start the server
startApolloServer();