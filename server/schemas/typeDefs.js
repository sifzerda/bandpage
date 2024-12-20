const typeDefs = `

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
}

type Mutation {
  addUser(username: String!): Auth
  addVideo(videoId: String!, title: String!, comment: String, username: String): Video
  updateUser(username: String!): User
  login(username: String!): Auth
  removeUser: User
  removeVideo(videoId: String!): Video
  
  # Add the songs argument to the addPlaylist mutation
  addPlaylist(userId: ID!, name: String!, songs: [SongInput]!): Playlist

  # Add SongInput type for adding songs
  addSongToPlaylist(userId: ID!, playlistName: String!, videoId: String!, title: String!): Playlist
  removeSongFromPlaylist(userId: ID!, playlistName: String!, videoId: String!): Playlist
  removePlaylist(userId: ID!, playlistName: String!): Playlist
  setAvailability(date: String!, user: String!, status: String!): Availability
}

# Input type for adding songs to a playlist
input SongInput {
  videoId: String!
  title: String!
}
`;

module.exports = typeDefs;