const { default: mongoose } = require("mongoose");
mongoose.set('strictQuery', true);

var mongoURL = 'mongodb+srv://dinith09:SOxA0KS2tt47OA9S@travelplanner.jd67zjr.mongodb.net/'


mongoose.connect(process.env.MONGODB_URI || mongoURL, { useUnifiedTopology: true, useNewUrlParser: true, })



var connection = mongoose.connection

connection.on('error', () => {
    console.log('MongDB Connection Failed')
})

connection.on('connected', () => {
    console.log('MongoDB Connection Successful')
})

module.exports = mongoose