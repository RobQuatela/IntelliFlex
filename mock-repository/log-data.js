const {Log} = require('../models/log');
const {exercises} = require('./exercise-data');
const {users} = require('./users-data');

const logs = [
    new Log(1, new Date('5/1/2018'), exercises[0], 1, 280, 10, users[0], undefined),
    new Log(2, new Date('5/2/2018'), exercises[0], 2, 280, 10, users[0], undefined),
    new Log(3, new Date('6/2/2018'), exercises[1], 1, 405, 10, users[0], undefined)
];

module.exports = {
    logs
};