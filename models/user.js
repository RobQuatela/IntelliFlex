const {Schema} = require('mongoose');

const {mongoose} = require('../server/database/mongoose');

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        minLength: 5,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minLength: 5,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        trim: true
    },
    logs: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Log'
        }
    ]
});

module.exports = {
    User
};