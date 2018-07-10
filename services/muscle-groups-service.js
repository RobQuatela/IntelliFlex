const muscleGroupRepo = require('../repositories/muscle-groups-repo');

// list all body parts
const listMuscleGroups = () => {
    return muscleGroupRepo.listMuscleGroups();
};

// retrieve bodypart by id
const getMuscleGroup = (id) => {
    return muscleGroupRepo.getMuscleGroup(id);
};

// save muscle group
const saveMuscleGroup = (muscleGroup) => {
    return muscleGroupRepo.saveMuscleGroup(muscleGroup);
}

module.exports = {
    getMuscleGroup,
    listMuscleGroups,
    saveMuscleGroup
};