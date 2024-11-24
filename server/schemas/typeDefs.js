const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Video {
    videoId: String
    title: String
    comment: String
    createdAt: String  # Optional: add createdAt if you want to track when it was posted
    updatedAt: String  # Optional: add updatedAt to track when it was last updated
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(userId: ID!): User
    users: [User]
    getVideos: [Video]  # Fetch videos, now with comment and optional timestamps
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addVideo(videoId: String!, title: String!, comment: String): Video  # Updated to include comment
    updateUser(username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    removeUser: User
    removeVideo(videoId: String!): Video  # Mutation to remove a video
  }
`;

module.exports = typeDefs;