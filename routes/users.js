const express = require('express');
const router = express.Router();

const User = require('../models/User');

//Express validator
const {check, validationResult} = require('express-validator');

//@route    POST api/users
//@desc     Register a user
//@access   Public
router.post('/', [
        check('name', 'Please enter a name').not().isEmpty(),
        check('email', 'Please enter a valid email').isEmail(),
        check('password', 'Password is required').exists()
     ],(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    res.send('Registered user correctly')
});

module.exports = router;