const authService = require("../service/auth");

async function login(req, res) {
  const { email, password } = req.body;

  // !Payload Validation
  if(!email || !password) {
    return res.status(400).json({ "msg": "Invalid email or password" });
  }

  // !Authenticate the user
  try {
    const user = await authService.login(email, password);
    req.session.user = user;
    return res.status(200).json({ msg: "user logged in" });
  } catch (err) {
    console.error(err);
    res.status(401).json(err);
  }
}

module.exports = {
  login
}