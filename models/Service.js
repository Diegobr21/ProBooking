const mongoose = require('mongoose');

const ServiceSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    service_cost:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('service', ServiceSchema);

