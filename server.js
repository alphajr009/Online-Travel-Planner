const express = require("express");
const helmet = require('helmet');
const path = require('path');
const cors = require('cors');




const app = express();

const dbconfig = require('./db')
const userRoute = require('./routes/usersRoute')
const placeRoute = require('./routes/placesRoute')
const reviewRoute = require('./routes/reviewsRoute')
const tripRoute = require('./routes/tripsRoute')

const corsOptions = {
    origin: ["http://localhost:3000", "https://tripgenie-b2e79f0cee46.herokuapp.com"],
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(helmet());



app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(express.json())

app.use('/api/users', userRoute)
app.use('/api/places', placeRoute)
app.use('/api/reviews', reviewRoute)
app.use('/api/trips', tripRoute)

const port = process.env.PORT || 5000;


if (process.env.NODE_ENV == 'production') {
    app.use(express.static('client/build'))
}

app.listen(port, () => console.log('Node Server Started using Nodemon!'));