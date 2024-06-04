const ALL_USERS = require("../data/AllUserData.js");
const UserExists = (username, password) => {
  let user = false;
  for (let i = 0; i < ALL_USERS.length; i++) {
    if (
      ALL_USERS[i].username === username &&
      ALL_USERS[i].password === password
    ) {
      user = true;
    }
  }
  return user;
};
module.exports = UserExists;
