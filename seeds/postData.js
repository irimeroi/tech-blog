const { Post } = require('../models');

const postData = [
    {
        "title": "The Future of Artificial Intelligence",
        "date": "11/24/23",
        "description": "Hello World",
        "user_id": 1,
    },
    {
        "title": "Elevate Your Code: Quick Programming Pro Tips",
        "date": "10/23/23",
        "description": "Hello World2",
        "user_id": 2,
    },
    {
        "title": "The Impact of Artificial Intelligence on the Job Market: Navigating the Future",
        "date": "10/23/23",
        "description": "Hello World2",
        "user_id": 3,
    }
];

const seedPost  = () => Post.bulkCreate(postData);
module.exports = seedPost;