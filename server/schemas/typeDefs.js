const typeDefs = `
  scalar JSON

  type User {
    _id: ID
    username: String
  }

  type Video {
    videoId: String
    title: String
    comment: String
    username: String  
    createdAt: String
    updatedAt: String
  }

  type Calendar {
    userId: ID!
    state: JSON
  }

  input CalendarStateInput {
    dateKey: String!
    index: Int!
    state: String!
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
    getCalendar(userId: ID!): Calendar
  }

  type Mutation {
    addUser(username: String!): Auth
    addVideo(videoId: String!, title: String!, comment: String, username: String): Video  
    updateUser(username: String): User
    login(username: String!): Auth
    removeUser: User
    removeVideo(videoId: String!): Video  
    updateCalendar(userId: ID!, state: [CalendarStateInput]!): Calendar
  }
`;

module.exports = typeDefs;