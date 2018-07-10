const {Schema} = require('mongoose');

const {mongoose} = require('../server/database/mongoose');

const TemplateExercise = mongoose.model('TemplateExercise', {
    template: {
        type: Schema.Types.ObjectId,
        ref: 'Template'
    },
    exercise: {
        type: Schema.Types.ObjectId,
        ref: 'Exercise'
    }
});

module.exports = {
    TemplateExercise
};