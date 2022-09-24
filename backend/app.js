const express = require('express');
const mongoose = require('mongoose');
const config = require('./utils/config');
const app = express();

mongoose.connect(config.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(data => console.log("connected to database"))
  .catch(error => console.log("failed to connect to database"));

app.get('/', (req,res) =>{
  res.send("<h1>Hello World</h1>").end();
});

module.exports = app;