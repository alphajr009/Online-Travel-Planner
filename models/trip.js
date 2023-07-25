const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({

    userid: {
        type: String,
        required: true
    },
    tripname: {
        type: String,
        required: true
    },
    do: [],
    eat: [],
    stay: [],

}, {
    timestamps: true,
})

const tripModel = mongoose.model('trip', tripSchema)

module.exports = tripModel