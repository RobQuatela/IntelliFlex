const express = require('express');
const bodyParser = require('body-parser');

const {User} = require('../models/user');
const {getUser, listUsers} = require('../services/user-service');

const app = express();

app.use(bodyParser.json());

app.post('/', (req, res) => {
    const user = new User(req.body.name, req.body.email);
    res.send(user);
});

app.get('/api/users', (req, res) => {
    res.send({result: listUsers()});
})

app.get('/api/users/:id', (req, res) => {
    res.send({result: getUser(req.params.id)});
});

const user = new User('rob', 'rob.quatela@gmail.com');

console.log(user);

app.listen(3000, () => {
    console.log('listening on 3000');
});