const mongoose = require('mongoose');

const LocationSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    creation_date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('location', LocationSchema);

