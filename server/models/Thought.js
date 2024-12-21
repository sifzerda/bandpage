const mongoose = require('mongoose');
const { Schema } = mongoose;

// Comment Schema
const commentSchema = new Schema({
  body: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Thought Schema
const thoughtSchema = new Schema({
  body: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [commentSchema], // Embedded Comments
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Reference to User
    required: true,
  },
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;