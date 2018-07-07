const {exercises} = require('../mock-repository/exercise-data');

const listExercises = () => {
    return exercises;
};

const getExercises = (id) => {
    const exercise = exercises.find(e => e._id === id);
    return exercise;
};

module.exports = {
    listExercises,
    getExercises
};