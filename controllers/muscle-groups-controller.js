const muscleGroupsService = require('../services/muscle-groups-service');

// GET lists all bodyparts
const listMuscleGroups_GET = (req, res) => {
    muscleGroupsService.listMuscleGroups().then((docs) => {
        res.send({
            result: docs
        });
    }, (err) => res.status(400).send(err));
};

// GET get bodypart by id
const getMuscleGroup_GET = (req, res) => {
    muscleGroupsService.getMuscleGroup(req.params.id).then((doc) => {
        res.send({
            result: doc
        });
    }, (err) => res.status(400).send(err));
};

// POST save muscle group
const saveMuscleGroup_POST = (req, res) => {
    muscleGroupsService.saveMuscleGroup(req.body).then((doc) => {
        res.send({
            result: doc
        });
    }, (err) => res.status(400).send(err));
};

module.exports = {
    listMuscleGroups_GET,
    getMuscleGroup_GET,
    saveMuscleGroup_POST
};