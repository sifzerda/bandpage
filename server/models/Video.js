const mongoose = require('mongoose');
const { Schema } = mongoose;

const videoSchema = new Schema({
    videoId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    comment: { type: String, maxlength: 500 }, // Optional: limit comment length
    username: { type: String }, // Ensure this field is included
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });

// Create a model for the Video schema
const Video = mongoose.model('Video', videoSchema);

module.exports = Video;