// Calendar Schema and Model for saving and retrieving Jam Calendar updates

const mongoose = require('mongoose');
const { Schema } = mongoose;

const calendarSchema = new Schema({
    userId: { 
        type: String, 
        required: true 
    },
    state: { 
        type: Object, 
        required: true 
    }, // Calendar state stored as an object
  });

// Create a model
const Calendar = mongoose.model("Calendar", calendarSchema);

module.exports = Calendar;