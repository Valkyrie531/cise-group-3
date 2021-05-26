const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

const MONGODB_URI = 'the link';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//http request logger
app.use(morgan('tiny'));

app.use('/', routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));