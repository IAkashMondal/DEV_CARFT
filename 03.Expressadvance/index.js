const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const UserExists = require("./Middlewares/UserExists.Middleware.js");
const ALL_USERS = require("./data/AllUserData.js");
const app = express();
app.use(express.json());

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (!UserExists(username, password)) {
    return res.status(403).json({
      msg: " user dosnt exits",
    });
  } else {
    var token = jwt.sign({ username: username }, jwtPassword);
    return res.status(200).json({
      token,
    });
  }
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;
  try {
    const decode = jwt.verify(token, jwtPassword);
    const LogedInUser = decode.username;
    const FilterUser = ALL_USERS.filter(
      (value) => value.username !== LogedInUser
    );
    return res.status(200).json({
      FilterUser: FilterUser
    });
  } catch (err) {
    return res.status(403).json({
      msg: "invaild token"
    });
  }
});

app.listen(3030, () => {
  console.log("server runing on port: 3030");
});
=======
const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const UserExists = require("./Middlewares/UserExists.Middleware.js");
const ALL_USERS = require("./data/AllUserData.js");
const app = express();
app.use(express.json());

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (!UserExists(username, password)) {
    return res.status(403).json({
      msg: " user dosnt exits",
    });
  } else {
    var token = jwt.sign({ username: username }, jwtPassword);
    return res.status(200).json({
      token,
    });
  }
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;
  try {
    const decode = jwt.verify(token, jwtPassword);
    const LogedInUser = decode.username;
    const FilterUser = ALL_USERS.filter(
      (value) => value.username !== LogedInUser
    );
    return res.status(200).json({
      FilterUser: FilterUser
    });
  } catch (err) {
    return res.status(403).json({
      msg: "invaild token"
    });
  }
});

app.listen(3030, () => {
  console.log("server runing on port: 3030");
});
