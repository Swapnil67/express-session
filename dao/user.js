const bcrypt = require("bcrypt");

const users = {
  'test10@test.io': {
    password: bcrypt.hashSync("user1", 10),
    roles: ['ACCOUNT_MANAGER'],
    id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
  },
  'test67@test.io': {
    password: bcrypt.hashSync("Test@1234", 10),
    roles: ['ADMIN'],
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
  }
}

async function findUserByEmail(email) {
  const user = users[email];
  return user ? user : Promise.reject("user not found");
}

module.exports = {
  findUserByEmail
}