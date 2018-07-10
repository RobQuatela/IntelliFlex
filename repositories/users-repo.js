const {User} = require('../models/user');
const {ObjectID} = require('mongodb');

const listUsers = () => {
    return User.find();
};

const getUser = (id) => {
    return User.findById(new ObjectID(id));
}

const saveUser = (user) => {
    const userToSave = new User({
        name: user.name,
        email: user.email,
        password: user.password
    });

    return userToSave.save();
};

module.exports = {
    listUsers,
    saveUser,
    getUser
};