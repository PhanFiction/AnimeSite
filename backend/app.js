const express = require('express');
const mongoose = require('mongoose');
const config = require('./utils/config');
const userRouter = require('./routes/userRouter');
const validate = require('./middleware/validation');
const checkCookie = require('./middleware/checkCookie');
const cookieParser = require('cookie-parser')
const app = express();

mongoose.connect(config.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(data => console.log("connected to database"))
  .catch(error => console.log("failed to connect to database"));

app.use(express.json());
app.use(cookieParser());
app.use('/auth', validate, userRouter);

app.get('/logout', checkCookie, (req, res) => {
  res.clearCookie('userToken').status(200).send({'success': 'logged out successfully'});
})


module.exports = app;