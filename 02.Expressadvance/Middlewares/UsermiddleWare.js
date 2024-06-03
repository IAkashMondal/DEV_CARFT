const userMiddleware = (req, res, next) => {
  const username = req.headers.username;
  const password = req.headers.password;

  if (username !== "admin" || password !== "admin") {
    res.status(401).json({
      msg: "Incorrect Inputs",
    });
  } else {
    next();
  }
};

module.exports = userMiddleware;
