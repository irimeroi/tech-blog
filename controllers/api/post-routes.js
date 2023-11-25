const router = require('express').Router();
const { Post, User } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const postData = await Comment.findAll();
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [{ model: User }]
        });
        if (!postData) {
            res.status(404).json({ message: 'No comment found'})
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json({ message: 'No comment found'})
    }
});