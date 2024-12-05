const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for a song in a playlist
const songSchema = new Schema({
  videoId: {
    type: String,  // YouTube video ID
    required: true,
  },
  title: {
    type: String,  // Title of the song
    required: true,
  },
});

// Define the schema for a playlist
const playlistSchema = new Schema({
  name: {
    type: String,  // Name of the playlist (e.g., "Favorites", "Workout")
    required: true,
  },
  songs: [songSchema],  // Array of songs in the playlist
});

// Define the main user schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  // Array of playlists
  playlists: [playlistSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;