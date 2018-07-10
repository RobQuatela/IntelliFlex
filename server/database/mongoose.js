const mongoose = require('mongoose');

const {connectionString} = require('../../config/mongodb.config');

mongoose.connect(connectionString);

module.exports = {
    mongoose
};