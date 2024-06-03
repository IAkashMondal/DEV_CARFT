const kidneyMiddleware = (req, res, next) => {
  const kidneyid = req.query.kidneyid;
  const kidneyHealth = req.query.kidneyhealth;

  if (kidneyid !== "2" || kidneyHealth !== "good") {
    res.status(400).json({
      msg: "Need Checkups",
    });
  } else {
    next();
  }
};

module.exports = kidneyMiddleware;
