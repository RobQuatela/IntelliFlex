const {mongoose} = require('../server/database/mongoose');
const {Schema} = require('mongoose');

const Exercise = mongoose.model('Exercise', {
    name: {
        type: String,
        required: true,
    },
    muscleGroup: {
        type: Schema.Types.ObjectId,
        ref: 'MuscleGroup',
        required: true
    },
    url: {
        type: String,
        required: false
    },
    logs: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Log'
        }
    ],
    templateExercises: [
        {
            type: Schema.Types.ObjectId,
            ref: 'ExerciseTemplate'
        }
    ]
});

module.exports = {
    Exercise
};