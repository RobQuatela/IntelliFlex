class Log {
    constructor(id, date, exercise, set, weight, reps, user, url) {
        this._id = id;
        this._date = date;
        this._exercise = exercise;
        this._set = set;
        this._weight = weight;
        this._reps = reps;
        this._user = user;
        this._url = url;
    }
};

module.exports = {
    Log
};