const { User, Video } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {

  Query: {

    users: async () => {
      return User.find()
    },
    ////////////
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId })
    },
    /////////////
    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findById(context.user._id)
      }
      throw new AuthenticationError('You must be logged in');
    },
    ////////////
    // Fetch all videos
    getVideos: async () => {
      return Video.find();  // Returns all video posts
    },

  },

  // ------------------------ MUTATIONS ----------------------------------------------------- //

  Mutation: {
    //------------------- ------ ------------------------- //
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    ///////////////
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }
      throw new AuthenticationError('You must be logged in to update your profile');
    },
    //////////////
    removeUser: async (parent, args, context) => {
      if (context.user) {
        try {
          const removedUser = await User.findByIdAndDelete(context.user._id);
          return removedUser;
        } catch (error) {
          throw new Error('Failed to remove user.');
        }
      } else {
        throw new AuthenticationError('You must be logged in to remove a user.');
      }
    },
    //////////////
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError;
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw AuthenticationError;
      }
      const token = signToken(user);
      return { token, user };
    }, // end login bracket

     // Add a new video to the database
     addVideo: async (parent, { videoId, title, comment }, context) => {
      if (context.user) {
      // Assuming you have a function to save the video to your database
      const newVideo = await Video.create({
        videoId,
        title,
        comment,
        userId: context.user.id, // Attach userId if needed
      });
      return newVideo;
      }
      throw new AuthenticationError('You must be logged in to add a video');
    },

      // Remove a video by videoId
      removeVideo: async (parent, { videoId }, context) => {
        if (context.user) {
          const video = await Video.findOneAndDelete({ videoId });
          if (!video) {
            throw new Error('Video not found');
          }
          return video;
        }
        throw new AuthenticationError('You must be logged in to remove a video');
      },

  }, // end mutation bracket

} // end resolvers bracket

module.exports = resolvers;
