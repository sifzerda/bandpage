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
  },

  Mutation: {
    // Add a new user
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
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
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Invalid credentials');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
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
  },
};

module.exports = resolvers;