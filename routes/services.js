const express = require('express');
const router = express.Router();

//@route    GET api/services
//@desc     Get all services
//@access   Public
router.get('/', (req, res) => {
    res.send('Get all registered services');
});


//@route    POST api/services
//@desc     Create a new service
//@access   Private
router.post('/', (req, res) => {
    res.send('Create a new service');
});


//@route    PUT api/services/:id
//@desc     Update existing service
//@access   Private
router.put('/:id', (req, res) => {
    res.send('Update existing service');
});


//@route    DELETE api/services/:id
//@desc     Delete existing service
//@access   Private
router.delete('/:id', (req, res) => {
    res.send('Delete existing service');
});

module.exports = router;