const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: 'You need to leave a thought!',
        minlength: 1,
        maxlength: 2000,
        trim: true,
    },
    thoughtAuthor: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    pageParams: {
        type: String,
        required: true,
    },
});

// Virtual property to format createdAt date
thoughtSchema.virtual('formattedCreatedAt').get(function () {
    return dayjs(this.createdAt).format('DD/MM/YYYY');
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;