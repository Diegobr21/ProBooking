const mongoose = require('mongoose');

const AppointmentSchema = mongoose.Schema({
    location:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'locations'
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    alert_time:{
        type: Number, //Number of hours before appointment to send alert
        default:24
    },
    send_alert:{
        type: Boolean,
        default: true
    },
    appointment_status:{
        type: String,
        default: 'Sent'
    },
    date_selected:{
        type: {day: Number, fraction: Boolean}, //date: {1, 5} representing Monday and 5th option available
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('appointment', AppointmentSchema);

