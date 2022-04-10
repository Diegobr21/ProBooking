const mongoose = require('mongoose');

const ScheduleSchema = mongoose.Schema({
    location:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'locations'
    },
    from_hour:{
        type: Number,
        default: 7,
        required: true
    },
    to_hour:{
        type: Number,
        default: 7,
        required: true
    },
    off_days:{
        type: String, //"1,2,3,4...7"
        required: true
    },
    creation_date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('schedule', ScheduleSchema);

