const {users} = require('../mock-repository/users-data');

const getUser = (id) => {
    const user = users.find(u => u._id === id);
    console.log(user);
    return user;
};

const listUsers = () => {
    return users;
}

module.exports = {
    getUser,
    listUsers
};