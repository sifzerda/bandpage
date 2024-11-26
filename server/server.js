const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const path = require("path");
const { authMiddleware } = require("./utils/auth");
const dotenv = require("dotenv");
const http = require("http"); // For creating an HTTP server
const { Server: SocketIOServer } = require("socket.io"); // Imports Socket.IO
dotenv.config();

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

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

// WebSocket state storage
let calendarState = {};

// Socket.IO server logic
io.on("connection", (socket) => {
  console.log("A user connected via WebSocket");

  // Send the current calendar state to the newly connected user
  socket.emit("load-state", calendarState);

  // Listen for calendar state updates from clients
  socket.on("update-state", (newState) => {
    calendarState = newState; // Update the server's state
    io.emit("state-updated", calendarState); // Broadcast the updated state to all users
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
});

// Start Apollo Server and integrate it with Express
const startApolloServer = async () => {
  await server.start();

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