const muscleGroupsService = require('../services/muscle-groups-service');

// GET lists all bodyparts
const listMuscleGroups_GET = (req, res) => {
    res.send({
        result: muscleGroupsService.listMuscleGroups()
    });
};

// GET get bodypart by id
const getMuscleGroup_GET = (req, res) => {
    console.log(req.params.id);
    res.send({
        result: muscleGroupsService.getMuscleGroup(parseInt(req.params.id))
    });
};

module.exports = {
    listMuscleGroups_GET,
    getMuscleGroup_GET
};