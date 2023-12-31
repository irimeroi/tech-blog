const { Comment } = require('../models');

const commentData = [
    {
        "date": "12/24/23",
        "commenttext": "Nice Post",
        "user_id": 1,
        "post_id": 1,
    },
    {
        "date": "10/23/23",
        "commenttext": "looks cool",
        "user_id": 2,
        "post_id": 1,
    },
    {
        "date": "10/23/23",
        "commenttext": "omg",
        "user_id": 3,
        "post_id": 1,
    }
];

const seedComment = () => Comment.bulkCreate(commentData);
module.exports = seedComment;