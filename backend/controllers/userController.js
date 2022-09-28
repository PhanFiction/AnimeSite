const User = require('../models/User');
const bcrypt = require('bcrypt');


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
  const { email, username, name, password } = req.body;
}

exports.logout = async (req, res) => {

}