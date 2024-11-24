const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema(
  {
    videoId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    comment: { type: String, maxlength: 500 }, // Optional: limit comment length
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model if you need to associate a video with a user
    },
  },
  { timestamps: true } // Optional: add createdAt and updatedAt
);

// Create a model for the Video schema
const Video = mongoose.model('Video', videoSchema);

module.exports = Video;