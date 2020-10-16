const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  gender: String
});

module.exports = mongoose.model('User', UserSchema, 'users');