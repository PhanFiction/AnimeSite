const User = require('../models/User');
const bcrypt = require('bcrypt');
const config = require('../utils/config');
const jwt = require('jsonwebtoken');

// Allows user to sign up
exports.signup = async (req, res) => {
  const { email, username, name, password } = req.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const newUser = new User({
    email: email,
    username: username,
    name: name,
    passwordHash
  });

  const savedUser = await newUser.save();
  if(!savedUser) return res.status(400).send({error: 'failed to signup'});
  return res.status(200).send({sucess: 'sucessfully created account'});
}

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const foundUser = await User.findOne({email});

  if(!foundUser) return res.status(404).send({'error': 'user not found'});

  const comparedPassword = await bcrypt.compare(password, foundUser.passwordHash);

  if(!comparedPassword) return res.status(404).send({"error": "password is incorrect"});

  const userForToken = {
    username: foundUser.username,
    name: foundUser.name,
    id: foundUser._id,
  }

  const signedToken = jwt.sign(userForToken, config.TOKEN);

  return res.status(200).cookie('userToken', signedToken).send({"success": "successfully logged in"})
}