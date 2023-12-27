const { Comment } = require('../models');

const commentData = [
    {
        "date": "12/24/23",
        "description": "Nice Post",
        "user_id": 1,
    },
    {
        "date": "10/23/23",
        "description": "looks cool",
        "user_id": 2,
    },
    {
        "date": "10/23/23",
        "description": "omg",
        "user_id": 3,
    }
];

const seedComment = () => Comment.bulkCreate(commentData);
module.exports = seedComment;