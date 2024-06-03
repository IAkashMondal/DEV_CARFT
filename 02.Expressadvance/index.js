const express = require("express");
const userMiddleware = require("./Middlewares/UsermiddleWare.js");
const kidneyMiddleware = require("./Middlewares/KidneyValidationMiddleware.js");
const {
  CalculateReq,
} = require("./Middlewares/callculateNoOfReq.middleware.js");
const TimeTakenMiddleware = require("./Middlewares/TimeTaken.Middleware.js");
const app = express();
app.use(express.json());
app.use(CalculateReq, TimeTakenMiddleware);
app.get("/health", userMiddleware, kidneyMiddleware, (req, res) => {
  const kidneyId = req.params.kidneyid;
  const kidneyHealth = req.params.kidneyhealth;

  res.status(200).json({
    msg: "Health check passed",
    kidneyId: kidneyId,
    kidneyHealth: kidneyHealth,
  });
});

app.listen(3030, () => {
  console.log("Server running on port 3030--------------------->");
});
