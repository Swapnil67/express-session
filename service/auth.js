const userDAO = require("../dao/user");
const bcrypt = require("bcrypt");

async function login(email, password) {
  try {
    const user = await userDAO.findUserByEmail(email);
    const match = await bcrypt.compare(password, user.password);
    if(match) {
      return { id: user.id, roles: user.roles }
    } else {
      return Promise.reject("Invalid email or password");
    }
  } catch (err) {
    console.log("Error: ", err);   
    return Promise.reject("User not found");
  }
}

module.exports = {
  login
}