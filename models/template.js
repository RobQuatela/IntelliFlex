const {Schema} = require('mongoose');

const {mongoose} = require('../server/database/mongoose');

const Template = mongoose.model('Template', {
    name: {
        type: String,
        required: true
    },
    exerciseTemplates: [
        {
            type: Schema.Types.ObjectId,
            ref: 'TemplateExercise'
        }
    ]
});

module.exports = {
    Template
};