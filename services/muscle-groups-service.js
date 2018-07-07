const {muscleGroups} = require('../mock-repository/muscle-group-data');

// list all body parts
const listMuscleGroups = () => {
    return bodyParts;
};

// retrieve bodypart by id
const getMuscleGroup = (id) => {
    const bodyPart = bodyParts.find(b => b._id === id);
    return bodyPart;
};

module.exports = {
    getMuscleGroup,
    listMuscleGroups
};