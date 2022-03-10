const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const app = express();


app.use(bodyParser.json());
//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () =>
console.log('connected to DB!')
);

app.listen(3000);