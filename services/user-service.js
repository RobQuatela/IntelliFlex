const {User} = require('../models/user');

const users = [
    {
        _id: 1,
        _name: 'rob',
        _email: undefined,
        _password: undefined
    },
    {
        _id: 2,
        _name: 'rob',
        _email: undefined,
        _password: undefined
    },
    {
        _id: 3,
        _name: 'rob',
        _email: undefined,
        _password: undefined
    },
];

const getUser = (id) => {
    const user = users.find(u => u._id == id);
    return user;
};

const listUsers = () => {
    return users;
}

module.exports = {
    getUser,
    listUsers
};