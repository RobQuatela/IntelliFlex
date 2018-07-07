const exercisesService = require('../services/exercises-service');

// GET list all exercises
const listExercises_GET = (req, res) => {
    res.send({
        result: exercisesService.listExercises()
    });
};

// GET get exercise by id
const getExercise_GET = (req, res) => {
    res.send({
        result: exercisesService.getExercises(parseInt(req.params.id))
    });
};

module.exports = {
    listExercises_GET,
    getExercise_GET
};