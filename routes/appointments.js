const { request } = require('express');
const express = require('express');
const router = express.Router();

//@route    GET api/appointments
//@desc     Get all location´s appointments
//@access   Public
router.get('/', (req, res) => {
    res.send('Get all locations appointments');
});


//@route    POST api/appointments
//@desc     Create a new appointment
//@access   Private
router.post('/', (req, res) => {
    res.send('Create a new appointment');
});


//@route    PUT api/appointments/:id
//@desc     Update existing appointment
//@access   Private
router.put('/:id', (req, res) => {
    res.send('Update existing appointment');
});


//@route    DELETE api/appointments/:id
//@desc     Delete existing appointment
//@access   Private
router.delete('/:id', (req, res) => {
    res.send('Delete existing appointment');
});

module.exports = router;