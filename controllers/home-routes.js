const router = require('express').Router();
const { User, Post } = require('../models');
// const withAuth = require('../utils/auth');

//sign up
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            // excludes passw for security reasons
            attributes: { exclude: ['password']},
            // order: [[ 'username', 'ASC' ]],
        });
        
        // this maps the user data to remove Sequelize-specific methods and get a clean JS object
        const posts = userData.map((post) => post.get({ plain: true }));

        //renders dashboard
        res.render('dashboard', {
            posts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(400).end();
    }
});

router.get('/login', async (req, res) => {
    // if user is loggedin, it redirects them to home page
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }
    // otherwise it redirects to login page
    res.render('login');
});

router.get('/logout', async (req, res) => {
    // if user is loggedin, it redirects them to home page
    if (!req.session.loggedIn) {
        res.render('/')
    }
    console.log('it works')
});

module.exports = router;