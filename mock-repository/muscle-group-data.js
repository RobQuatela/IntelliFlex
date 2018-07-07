const {MuscleGroup} = require('../models/muscle-group');

const muscleGroups = [
    new MuscleGroup(1, 'Chest'),
    new MuscleGroup(2, 'Back'),
    new MuscleGroup(3, 'Quads'),
    new MuscleGroup(4, 'Biceps'),
    new MuscleGroup(5, 'Triceps')
];

module.exports = {
    muscleGroups
};