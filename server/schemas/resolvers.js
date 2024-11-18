const { User, Thought } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {

  Query: {

    users: async () => {
      return User.find()
        .populate('thoughts');
    },
////////////
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId })
        .populate('thoughts');
    },
/////////////
    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findById(context.user._id)
          .populate('thoughts');
      }
      throw new AuthenticationError('You must be logged in');
    },
////////////
thoughts: async () => {
  try {
    return await Thought.find();
  } catch (error) {
    throw new Error('Error retrieving thoughts');
  }
},
/////// get thoughts by page/subject URL
    thoughtsPage: async (parent, { pageParams }) => {
      try {
        return Thought.find({ pageParams });
      } catch (error) {
        throw new Error('Error retrieving thoughts for the page');
      }
    }
  },

// ------------------------ MUTATIONS ----------------------------------------------------- //

  Mutation: {
//------------------- thoughts ------------------------- //

// creating a thought linked to a User
    addThought: async (parent, { userId, thoughtText, pageParams }, context) => {
      if (context.user) {
        try {
          const newThought = await Thought.create({
            thoughtText,
            thoughtAuthor: context.user.username,
            pageParams,
          });

          await User.findByIdAndUpdate(
            userId,
            { $addToSet: { thoughts: newThought._id } },
            { new: true, runValidators: true }
          );

          return newThought;
        } catch (error) {
          console.error('Error adding thought:', error);
          throw new Error('Error adding thought');
        }
      } else {
        throw new AuthenticationError('You must be logged in to add a thought');
      }
    },

  /////////////////
  removeThought: async (parent, { thoughtId }, context) => {
    if (context.user) {
      try {
        const thought = await Thought.findById(thoughtId);
        if (!thought) {
          throw new Error('Thought not found');
        }

        await Thought.findByIdAndDelete(thoughtId);
        await User.updateMany(
          { thoughts: thoughtId },
          { $pull: { thoughts: thoughtId } }
        );

        return thought;
      } catch (error) {
        console.error('Error removing thought:', error);
        throw new Error('Failed to remove thought.');
      }
    } else {
      throw new AuthenticationError('You must be logged in to remove a thought.');
    }
  },

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

  }, // end mutation bracket

} // end resolvers bracket

module.exports = resolvers;
