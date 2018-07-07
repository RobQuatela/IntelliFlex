const MuscleGroup = require('./muscle-group');

class Exercise {
    constructor(id, name, muscleGroup, url) {
        this._id = id;
        this._name = name;
        this._muscleGroup = muscleGroup;
        this._url = url;
    }
};

module.exports = {
    Exercise
};