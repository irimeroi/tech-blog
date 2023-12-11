const router = require('express').Router();
const { User } = require('../../models');

//creates new user
//SIGNUP
router.post('/', async (req, res) => {
    try {
        const userData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        //it manually saves the session
        //used in async functions to ensure that the session is saved before sending a response
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.loggedIn = true;

            res.status(200).json(userData);
        });
        // res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err)
    }
});

// log in function
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email }});
        if (!userData) {
            res.status(400).json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = userData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        //might need to include username or email
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.loggedIn = true;

            res.json({ user: userData, message: 'You are now logged in!'});
        });
        // res.json({ user: userData, message: 'You are now logged in!'});
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
});

// logout function 
router.post('/logout', async (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;