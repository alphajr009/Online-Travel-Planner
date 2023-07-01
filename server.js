const express = require("express");


const app = express();

const dbconfig = require('./db')


const port = process.env.PORT || 5000;


if (process.env.NODE_ENV == 'production') {
    app.use(express.static('client/build'))
}

app.listen(port, () => console.log('Node Server Started using Nodemon!'));