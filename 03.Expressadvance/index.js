const express = require("express"); // Import Express framework
const jwt = require("jsonwebtoken"); // Import JSON Web Token library for token generation and verification
const UserExists = require("./middlewares/UserExists.Middleware.js"); // Middleware to check if user exists
const ALL_USERS = require("./data/AllUserData.js"); // Mock data of all users

const jwtPassword = "123456"; // Secret key for JWT signing and verification
const app = express(); // Create an Express app
app.use(express.json()); // Middleware to parse JSON requests

// Route for user sign-in
app.post("/signin", (req, res) => {
  const { username, password } = req.body; // Destructure username and password from request body

  // Check if the user exists using the UserExists middleware
  if (!UserExists(username, password)) {
    return res.status(403).json({ msg: "User doesn't exist" }); // Respond with 403 if user doesn't exist
  }

  // If user exists, generate a JWT token
  const token = jwt.sign({ username }, jwtPassword);
  return res.status(200).json({ token }); // Respond with the generated token
});

// Route to get all users except the logged-in user
app.get("/users", (req, res) => {
  const token = req.headers.authorization; // Get the token from the Authorization header

  try {
    const decoded = jwt.verify(token, jwtPassword); // Verify the token
    const loggedInUser = decoded.username; // Extract the username from the decoded token

    // Filter out the logged-in user from the list of all users
    const filteredUsers = ALL_USERS.filter(
      (user) => user.username !== loggedInUser
    );
    return res.status(200).json({ filteredUsers }); // Respond with the filtered list of users
  } catch (err) {
    return res.status(403).json({ msg: "Invalid token" }); // Respond with 403 if the token is invalid
  }
});

// Start the server on port 3030
app.listen(3030, () => {
  console.log("Server running on port: 3030");
});
