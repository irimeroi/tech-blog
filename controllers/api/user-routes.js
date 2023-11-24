const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        //add req.session here
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err)
    }
});

router.post('/login', (req, res) => {

});

router.post('/logout', (req, res) => {

});

module.exports = router;