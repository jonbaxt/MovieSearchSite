const express = require('express');
// const bodyParser = require('body-parser');
// const session = require('express-sessions');
// const axios = require('axios');
// const massive = require('massive');
// const chalk = require('chalk');
require('dotenv').config();
const con = require('./controller');

const app = express();

const PORT = 5000;
/*
const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env;
*/

// app.use( bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.get('/api/getMovie/:moviesearch', con.getMovie);

// app.listen(SERVER_PORT, ()=> console.log(`Connect on port ${SERVER_PORT}`));
app.listen(PORT, ()=> console.log(`Connected on port ${PORT}`));