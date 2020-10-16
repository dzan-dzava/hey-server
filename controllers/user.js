const User = require('../models/user');

function saveUser(req, res) {
  const payload = req.body;
  console.log(payload);
  const user = new User(req.body);

  if (payload.email && payload.username && payload.password && payload.firstName && payload.lastName && payload.gender) {

  } else {
    return res.status(400).send({ message: 'Invalid Data'});
  }

  user.save();
  res.send('registered');
}

module.exports = {
  saveUser
};