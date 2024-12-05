const { User, Video } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    // Fetch all users
    users: async () => {
      return User.find();
    },

    // Fetch a single user by ID
    user: async (parent, { userId }) => {
      return User.findById(userId);
    },

    // Fetch the logged-in user's data
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findById(context.user._id);
      }
      throw new AuthenticationError('You must be logged in');
    },

    // Fetch all videos
    getVideos: async () => {
      return Video.find(); // Ensure all fields (including username) are returned
    },

    // Fetch playlists for a specific user
    getPlaylists: async (parent, { userId }) => {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error('User not found');
      }
      return user.playlists;
    },
  },

  Mutation: {
    // Add a new user
    addUser: async (parent, { username }) => {
      const user = await User.create({ username });
      const token = signToken(user);
      return { token, user };
    },

    // Update user details
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(context.user._id, args, {
          new: true,
          runValidators: true,
        });
      }
      throw new AuthenticationError('You must be logged in to update your profile');
    },

    // Remove a user
    removeUser: async (parent, args, context) => {
      if (context.user) {
        try {
          const removedUser = await User.findByIdAndDelete(context.user._id);
          return removedUser;
        } catch (error) {
          throw new Error('Failed to remove user.');
        }
      }
      throw new AuthenticationError('You must be logged in to remove a user.');
    },

    // Login a user
    login: async (parent, { username }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new AuthenticationError('Invalid credentials');
      }
      const token = signToken(user);
      return { token, user };
    },

    // Add a new video
    addVideo: async (parent, { videoId, title, comment }, context) => {
      if (context.user) {
        const newVideo = await Video.create({
          videoId,
          title,
          comment,
          username: context.user.username, // Attach the logged-in user's username
        });
        return newVideo;
      }
      throw new AuthenticationError('You must be logged in to add a video');
    },

    // Remove a video by its ID
    removeVideo: async (parent, { videoId }, context) => {
      if (context.user) {
        const video = await Video.findOneAndDelete({
          videoId,
          username: context.user.username, // Ensure the video belongs to the logged-in user
        });
        if (!video) {
          throw new Error('Video not found or not authorized to delete');
        }
        return video;
      }
      throw new AuthenticationError('You must be logged in to remove a video');
    },

    // Add a new playlist for the user
    addPlaylist: async (parent, { name }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
        if (!user) {
          throw new Error('User not found');
        }
        const newPlaylist = { name, songs: [] };
        user.playlists.push(newPlaylist);
        await user.save();
        return newPlaylist;
      }
      throw new AuthenticationError('You must be logged in to add a playlist');
    },

    // Add a song to a user's playlist
    addSongToPlaylist: async (parent, { playlistName, videoId, title }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
        if (!user) {
          throw new Error('User not found');
        }
        const playlist = user.playlists.find(p => p.name === playlistName);
        if (!playlist) {
          throw new Error('Playlist not found');
        }
        playlist.songs.push({ videoId, title });
        await user.save();
        return playlist;
      }
      throw new AuthenticationError('You must be logged in to add a song');
    },

    // Remove a song from a user's playlist
    removeSongFromPlaylist: async (parent, { playlistName, videoId }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
        if (!user) {
          throw new Error('User not found');
        }
        const playlist = user.playlists.find(p => p.name === playlistName);
        if (!playlist) {
          throw new Error('Playlist not found');
        }
        playlist.songs = playlist.songs.filter(song => song.videoId !== videoId);
        await user.save();
        return playlist;
      }
      throw new AuthenticationError('You must be logged in to remove a song');
    },

    // Remove a playlist from a user
    removePlaylist: async (parent, { playlistName }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
        if (!user) {
          throw new Error('User not found');
        }
        user.playlists = user.playlists.filter(p => p.name !== playlistName);
        await user.save();
        return { message: 'Playlist removed successfully' };
      }
      throw new AuthenticationError('You must be logged in to remove a playlist');
    },
  },
};

module.exports = resolvers;