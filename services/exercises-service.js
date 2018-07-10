const exerciseRepo = require('../repositories/exercises-repo');

const listExercises = () => {
    return exerciseRepo.listExercises();
};

const getExercises = (id) => {
    return exerciseRepo.getExercise(id);
};

const saveExercise = (exercise) => {
    return exerciseRepo.saveExercise(exercise);
};

module.exports = {
    listExercises,
    getExercises,
    saveExercise
};