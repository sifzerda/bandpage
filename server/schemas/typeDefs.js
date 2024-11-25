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
  username: String  
  createdAt: String
  updatedAt: String
}

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(userId: ID!): User
    users: [User]
    getVideos: [Video]   
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addVideo(videoId: String!, title: String!, comment: String, username: String): Video  
    updateUser(username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    removeUser: User
    removeVideo(videoId: String!): Video  
  }
`;

module.exports = typeDefs;