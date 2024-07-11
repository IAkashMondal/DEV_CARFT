// Import the mock data of all users
const ALL_USERS = require("../data/AllUserData.js");

// Middleware to check if a user exists
const UserExists = (username, password) => {
  // Initialize a flag to track if the user exists
  let userExists = false;

  // Iterate through all users to find a match
  for (let i = 0; i < ALL_USERS.length; i++) {
    // Check if the current user matches the provided username and password
    if (
      ALL_USERS[i].username === username &&
      ALL_USERS[i].password === password
    ) {
      // If a match is found, set the flag to true
      userExists = true;
      // Break the loop since we found a match
      break;
    }
  }

  // Return the result indicating whether the user exists or not
  return userExists;
};

// Export the UserExists middleware for use in other parts of the application
module.exports = UserExists;
