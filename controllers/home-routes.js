const router = require('express').Router();
const { User, Post } = require('../models');
// const withAuth = require('../utils/auth');

//homepage //all posts
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: {
                model: User,
                attributes: {
                    exclude: ['password', 'email']
                }
            }
        });

        // this maps the user data to remove Sequelize-specific methods and get a clean JS object
        const posts = postData.map((post) => post.get({ plain: true }));
        // console.log(posts)

        res.render('home', {
            posts: posts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(400).end();
    }
});

//one post
router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: {
                model: User,
                attributes: {
                    exclude: ['password', 'email']
                }
            }
        });
        const posts = postData.get({ plain: true });
        res.render('one-post', {
            //destructures the object
            ...posts,
            loggedIn: req.session.loggedIn,
        });

        if (!postData) {
            res.status(404).json({ message: 'No comment found'})
            return;
        }
    } catch (err) {
        res.status(500).json({ message: 'No comment found'})
    }
});

//login
router.get('/login', async (req, res) => {
    // if user is loggedin, it redirects them to home page
    if (req.session.loggedIn) {
        res.redirect('/home ');
        return;
    }
    // otherwise it redirects to login page
    res.render('login');
});

//logout
router.get('/logout', async (req, res) => {
    // if user is loggedin, it redirects them to home page
    if (!req.session.loggedIn) {
        res.render('/')
    }
    console.log('it works')
});

module.exports = router;