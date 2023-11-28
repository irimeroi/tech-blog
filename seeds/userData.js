const { User } = require('../models');

const userData = [
    {
        "username": "irina",
        "email": "irina@gmail.com",
        "password": "qwert12345"
    },
    {
        "username": "stefano",
        "email": "stefano@gmail.com",
        "password": "12345qwert"
    },
    {
        "username": "luni",
        "email": "luni@hotmail.com",
        "password": "poiuy09876"
    }
];

const seedUser = () => User.bulkCreate(userData);
//set individual hooks to true
module.exports = seedUser;
