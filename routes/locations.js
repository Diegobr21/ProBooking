const { request } = require('express');
const express = require('express');
const router = express.Router();

//@route    GET api/locations
//@desc     Get all locations
//@access   Public
router.get('/', (req, res) => {
    res.send('Get all locations');
});


//@route    POST api/locations
//@desc     Create a new location
//@access   Private
router.post('/', (req, res) => {
    res.send('Create a new location');
});


//@route    PUT api/locations/:id
//@desc     Update existing location
//@access   Private
router.put('/:id', (req, res) => {
    res.send('Update existing location');
});


//@route    DELETE api/locations/:id
//@desc     Delete existing location
//@access   Private
router.delete('/:id', (req, res) => {
    res.send('Delete existing location');
});

module.exports = router;