const mongoose = require('mongoose');

const LocationSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    minimum_date_minutes:{
        type: Number,
        default: 30
    },
    available_days:{
        type: [{day: Number, selection: Boolean}], //per week {1:True, 2:False,..}
        required: true
    },
    available_hrs_per_day:{
        type: [{fraction: Number, selection: Boolean}], //per day {1:True, 2:False,..}
        required: true
    },
    creation_date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('location', LocationSchema);

