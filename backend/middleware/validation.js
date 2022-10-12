const validation = async (req, res, next) => {
  const { email, username, password } = req.body;
  if(username === null || username.length < 1) return res.status(400).send({error: "username is not found"});
  if(email === null || email === undefined || email.length < 1) return res.status(400).send({error: "email is not defined"});
  if(password === null || password === undefined || password.length < 4) return res.status(400).send({error: 'password is not defined'});
  next();
};

module.exports = validation;