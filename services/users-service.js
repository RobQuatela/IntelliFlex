//const {users} = require('../mock-repository/users-data');
const userRepo = require('../repositories/users-repo');
const {User} = require('../models/user');

const getUser = (id) => {
    return userRepo.getUser(id);
};

const listUsers = () => {
    return userRepo.listUsers();
};

const saveUser = (user) => {
    return userRepo.saveUser(user);
}

module.exports = {
    getUser,
    listUsers,
    saveUser
};