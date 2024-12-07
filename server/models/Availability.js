// this model is for storing song suggestion videos found and saved on the YT search

const mongoose = require('mongoose');
const { Schema } = mongoose;

const availabilitySchema = new Schema({
    date: {
        type: String, // Format: "YYYY-MM-DD"
        required: true,
      },
      user: {
        type: String, // User's name
        required: true,
      },
      status: {
        type: String, // "normal", "green", or "red"
        enum: ["normal", "green", "red"],
        default: "normal",
      },
    });

    // Ensure unique entries for the same user and date
availabilitySchema.index({ date: 1, user: 1 }, { unique: true });

const Availability = mongoose.model("Availability", availabilitySchema);

module.exports = Availability;