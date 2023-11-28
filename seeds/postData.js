const { Post } = require('../models');

const postData = [
    {
        "title": "The Future of Artificial Intelligence",
        "date": "11/24/23",
        "description": "Hello World"
    },
    {
        "title": "Elevate Your Code: Quick Programming Pro Tips",
        "date": "10/23/23",
        "description": "Hello World2"
    }
];

const seedPost  = () => Post.bulkCreate(postData);
module.exports = seedPost;