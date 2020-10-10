function saveUser(req, res) {
  console.log(req.body);
  res.send('registered');
}

module.exports = {
  saveUser
};