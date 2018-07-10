const {MuscleGroup} = require('../models/muscle-group');
const {ObjectID} = require('mongodb');

const listMuscleGroups = () => {
    return MuscleGroup
        .find()
        .populate('exercises');
};

const getMuscleGroup = (id) => {
    return MuscleGroup.findById(new ObjectID(id));
};

const saveMuscleGroup = (muscleGroup) => {
    return new MuscleGroup({
        name: muscleGroup.name
    }).save();
};

module.exports = {
    listMuscleGroups,
    getMuscleGroup,
    saveMuscleGroup
};