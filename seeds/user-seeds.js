const { User } = require('../models');

const userData = [
    {
        "username": "datapirate",
        "email": "matt@gmail.com",
        "password": "pass123",
    },
    {
        "username": "codebreaker",
        "email": "abby@gmail.com",
        "password": "pass456",
    },
    {
        "username": "infiniteloop",
        "email": "eddie@gmail.com",
        "password": "pass789",
    },
    {
        "username": "johnDoe",
        "email": "john@gmail.com",
        "password": "pass789",
    },
    {
        "username": "eddieg",
        "email": "eddie@gmail.com",
        "password": "pass789",
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;