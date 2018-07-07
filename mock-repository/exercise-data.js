const {muscleGroups} = require('./muscle-group-data');
const {Exercise} = require('../models/exercise');

const exercises = [
    new Exercise(1, 'Barbell Bench Press', muscleGroups[0], undefined),
    new Exercise(2, 'Barbell Squat', muscleGroups[2], undefined),
    new Exercise(3, 'Dumbbell Curl', muscleGroups[3], undefined)
];

module.exports = {
    exercises
};