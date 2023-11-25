const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const userData = await User.findAll({
            //excludes passw for security reasons
            attributes: { exclude: ['password']},
            order: [[ 'username', 'ASC' ]],
        });
        
        //this maps the user data to remove Sequelize-specific methods and get a clean JS object
        //do we need it?
        const users = userData.map((project) => project.get({ plain: true }));

        res.render('homepage', {
            users,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/login', (req, res) => {
    //if user is loggedin, it redirects them to home page
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    //otherwise it redirects to login page
    res.render('login');
});

module.exports = router;