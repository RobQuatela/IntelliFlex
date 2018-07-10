const {ObjectID} = require('mongodb');

const {Exercise} = require('../models/exercise');
const {MuscleGroup} = require('../models/muscle-group');

const listExercises = () => {
    return Exercise
        .find()
        .populate('muscleGroup')
        .exec();
};

const getExercise = (id) => {
    return Exercise.findById(new ObjectID(id));
};

const saveExercise = (exercise) => {
    return new Exercise({
        name: exercise.name,
        muscleGroup: exercise.muscleGroup,
        url: exercise.url
    }).save();
};

module.exports = {
    listExercises,
    getExercise,
    saveExercise
};