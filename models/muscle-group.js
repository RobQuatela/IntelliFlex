const BodyPart = require('./body-part');

class MuscleGroup {
    constructor(name, bodyPart) {
        this._name = name;
        this._bodyPart = bodyPart;
    }
};

module.exports = {
    MuscleGroup
};