const typeDefs = `

  type User {
    _id: ID
    username: String
    email: String
    password: String
    thoughts: [Thought]
  }

  type Thought {
    _id: ID
    thoughtText: String
    thoughtAuthor: String
    createdAt: String
    pageParams: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(userId: ID!): User
    users: [User]
    me: User
    thought(thoughtId: ID!): Thought
    thoughts: [Thought]
    thoughtsPage(pageParams: String!): [Thought]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addThought(userId: ID!, thoughtText: String!, pageParams: String!): Thought
    removeThought(thoughtId: ID!): Thought
    removeUser: User
  }
`;

module.exports = typeDefs;
