const typeDefs = `

type Comment {
  id: ID!
  body: String!
  username: String!
  createdAt: String!
}

type Thought {
  id: ID!
  body: String!
  username: String!
  createdAt: String!
  comments: [Comment]
  user: User!
}

type Song {
  videoId: String!
  title: String!
}

type Playlist {
  name: String!
  songs: [Song!]!
}

type User {
  _id: ID!
  username: String!
  playlists: [Playlist!]!
  thoughts: [Thought]
}

type Video {
  videoId: String!
  title: String!
  comment: String
  username: String
  createdAt: String
  updatedAt: String
}

type Availability {
  id: ID!
  date: String!
  user: String!
  status: String!
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
  getPlaylists(userId: ID!): [Playlist!]   
  getAvailabilities(date: String!): [Availability]
  getThoughts(username: String): [Thought]
}

type Mutation {
  addUser(username: String!): Auth
  addVideo(videoId: String!, title: String!, comment: String, username: String): Video
  updateUser(username: String!): User
  login(username: String!): Auth
  removeUser: User
  removeVideo(videoId: String!): Video
  
  addPlaylist(userId: ID!, name: String!, songs: [SongInput]!): Playlist

  addSongToPlaylist(userId: ID!, playlistName: String!, videoId: String!, title: String!): Playlist
  removeSongFromPlaylist(userId: ID!, playlistName: String!, videoId: String!): Playlist
  removePlaylist(userId: ID!, playlistName: String!): Playlist
  setAvailability(date: String!, user: String!, status: String!): Availability

  addThought(userId: ID!, body: String!): Thought
  addComment(thoughtId: ID!, username: String!, body: String!): Comment
}

input SongInput {
  videoId: String!
  title: String!
}
`;

module.exports = typeDefs;