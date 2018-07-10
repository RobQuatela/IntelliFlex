const userService = require('../services/users-service');

// GET request for listing all users
const listUsers_GET = (req, res) => {
    userService.listUsers().then((doc) => {
        res.send({
            result: doc
        });
    }, (err) => {
        res.status(400).send(err);
    });
};

//GET request for fetching a single user by id
const getUser_GET = (req, res) => {
    userService.getUser(req.params.id).then((doc) => {
        res.send({
            result: doc
        });
    }, (err) => {
        res.status(400).send(err);
    });
};

// POST request for saving user
const saveUser_POST = (req, res) => {
    userService.saveUser(req).then((doc) => {
        res.send({
            result: doc
        });
    }, (err) => {
        res.status(400).send(err);
    });
};

module.exports = {
    listUsers_GET,
    getUser_GET,
    saveUser_POST
};