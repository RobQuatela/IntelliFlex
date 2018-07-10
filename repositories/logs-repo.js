const {ObjectID} = require('mongodb');

const {Log} = require('../models/log');
const {User} = require('../models/user');
const {Exercise} = require('../models/exercise');

const listLogs = () => {
    return Log.find();
};

const getLog = (id) => {
    return Log.findById(new ObjectID(id));
};

const saveLog = (log) => {
    return new Log({
        date: log.date,
        exercise: log.exercise,
        set: log.set,
        weight: log.weight,
        reps: log.reps,
        user: log.user,
        url: log.url
    }).save();
};

module.exports = {
    listLogs,
    getLog,
    saveLog
};