const {mongoose} = require('../server/database/mongoose');
const {Schema} = require('mongoose');

const MuscleGroup = mongoose.model('MuscleGroup', {
    name: {
        type: String,
        required: true
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Exercise'
        }
    ] 
});

module.exports = {
    MuscleGroup
};