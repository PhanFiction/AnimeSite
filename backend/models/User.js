const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const userSchema = new Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  username: {
    type: String,
    required: true,
    min: 3,
    max: 65,
  },
  name: {
    type: String,
    required: true,
    min: 3,
    max: 65,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  id: Schema.Types.ObjectId,
})

const User = mongoose.model("User", userSchema);

module.exports = User;