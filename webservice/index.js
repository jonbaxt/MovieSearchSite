const express = require('express');
require('dotenv').config();
const con = require('./controller');

const app = express();

const PORT = 5000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.get('/api/getMovie/:moviesearch', con.getMovie);

// app.listen(SERVER_PORT, ()=> console.log(`Connect on port ${SERVER_PORT}`));
app.listen(PORT, ()=> console.log(`Connected on port ${PORT}`));