const exercisesService = require('../services/exercises-service');

// GET list all exercises
const listExercises_GET = (req, res) => {
    exercisesService.listExercises().then((docs) => {
        res.send({
            result: docs
        });
    }, (err) => res.status(400).send(err));
};

// GET get exercise by id
const getExercise_GET = (req, res) => {
    exercisesService.getExercises(res.params.id).then((doc) => {
        res.send({
            result: doc
        });
    }, (err) => res.status(400).send(err));
};

// POST save exercise
const saveExercise_POST = (req, res) => {
    exercisesService.saveExercise(req.body).then((doc) => {
        res.send({
            result: doc
        });
    }, (err) => res.status(400).send(err));
};

module.exports = {
    listExercises_GET,
    getExercise_GET,
    saveExercise_POST
};