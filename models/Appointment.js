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
    service:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'services'
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
    appointment_start:{
        type: Date,
        required: true
    },
    appointment_end:{
        type: Date,
        required: true
    },
    date_creation:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('appointment', AppointmentSchema);

