const userService = require('../services/users-service');

// GET request for listing all users
const listUsers_GET = (req, res) => {
    res.send({
        result: userService.listUsers()
    });
};

//GET request for fetching a single user by id
const getUser_GET = (req, res) => {
    res.send({
        result: userService.getUser(parseInt(req.params.id))
    });
}

module.exports = {
    listUsers_GET,
    getUser_GET
};