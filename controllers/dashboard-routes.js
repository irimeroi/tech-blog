const router = require('express').Router();
const { User, Post } = require('../models');

router.get('/', async (req, res) => {
    try {
        const userData = await Post.findAll({
            where: {user_id: req.session.user_id},
            include: {
                model: User
            }
        });

        // this maps the user data to remove Sequelize-specific methods and get a clean JS object
        const posts = userData.map((post) => {return post.get({ plain: true })});
        console.log(posts);

        // renders dashboard
        res.render('dashboard', {
            posts: posts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err.message);
        res.status(400).end();
    }
});

router.get('/new-post', async (req, res) => {
    res.render('new-post');
});

router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [{ model: User }]
        });
        if (!postData) {
            res.status(404).json({ message: 'No comment found' })
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/edit/:id', async (req, res) => {
    const postData = await Post.findByPk(req.params.id, {
        include: [{ model: User }]
    });
    console.log(postData)
    res.render('edit-post', {id: postData.dataValues.id});
})

module.exports = router;