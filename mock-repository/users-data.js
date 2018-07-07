const {User} = require('../models/user');

const users = [
    new User(
        1, 'rob', undefined, undefined
    ),
    new User(
        2, 'sarah', undefined, undefined
    ),
    new User(
        3, 'kelly', undefined, undefined
    )
];

module.exports = {
    users
};