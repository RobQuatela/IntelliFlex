const {mongoose} = require('../server/database/mongoose');
const {Schema} = require('mongoose');

const {Exercise} = require('./exercise');
const {User} = require('./user');

const Log = mongoose.model('Log', {
    date: {
        type: Date,
        required: true
    },
    exercise: {
        type: Schema.Types.ObjectId,
        ref: 'Exercise',
        required: true
    },
    set: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    url: {
        type: String
    }
});

module.exports = {
    Log
};