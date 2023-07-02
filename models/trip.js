const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({

    userid: {
        type: String,
        required: true
    },
    do: {
        type: String,
        required: true
    },
    eat: {
        type: String,
        required: true
    },
    stay: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
})

const tripModel = mongoose.model('trip', tripSchema)

module.exports = tripModel