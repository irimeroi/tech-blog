const router = require('express').Router();
const { Post, User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const postData = await Post.create({ 
            ...req.body,
            user_id: req.session.user_id
         });
        res.status(200).json(postData);
    } catch (err) {
        console.log(err.message);
        res.status(500).json(err);
    }
});

router.get('/new-post', async (req, res) => {
    res.render('new-post');
});

router.put('/:id', async (req, res) => {
    try {
        const post = await Post.update(
            {...req.body, user_id: req.session.user_id},
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.destroy(
            {
                where: {
                    id: req.params.id,
                    user_id: req.session.user_id,
                },
            }
        );
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;