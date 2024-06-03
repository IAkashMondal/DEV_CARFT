const express = require("express");
const zod = require("zod");
const userMiddleware = require("./Middlewares/UsermiddleWare.js");
const kidneyMiddleware = require("./Middlewares/KidneyValidationMiddleware.js");
const {
  CalculateReq,
} = require("./Middlewares/callculateNoOfReq.middleware.js");
const TimeTakenMiddleware = require("./Middlewares/TimeTaken.Middleware.js");
const app = express();
app.use(express.json());
app.use(CalculateReq, TimeTakenMiddleware);

// ZOD Kidney schema validation midedleware
const kidneySchema = zod.array(zod.number());
const Userschema = zod.object({
  email: zod.string().email({ message: "invalid email id" }),
  password: zod
    .string()
    .min(8)
    .max(16)
    .regex(/[A-Z]/, /[a-z]/, /[0-9]/, /[^A-Za-z0-9]/),
});
app.get("/health", userMiddleware, kidneyMiddleware, (req, res) => {
  const kidneyId = req.query.kidneyid;
  const kidneyHealth = req.query.kidneyhealth;

  res.status(200).json({
    msg: "Health check passed",
    kidneyId: kidneyId,
    kidneyHealth: kidneyHealth,
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const validationResult = Userschema.safeParse({email, password});

  if (!email || !password) {
    res.status(411).json({
      msg: !email ?"wrong email" :"wrong Password",
    });
  } else if (!validationResult.success) {
    res.status(411).json({
      msg: validationResult.error.errors[0].message,
    });
  } else {
    res.status(200).json({
      msg: "login successful",
      respod: validationResult.data,
    });
  }
});
app.post("/add", (req, res) => {
  const kidneys = req.body.kidneys;
  const respond = kidneySchema.safeParse(kidneys);
  // const kidneylength = kidneys.length;

  // if (!kidneys) {
  //   res.status(411).json({
  //     msg: "invalid kidneys",
  //   });
  // } else {
  //   res.status(200).json({
  //     msg: "sucess",
  //     kidneys: kidneys,
  //   });
  // }
  if (!respond.success) {
    res.status(411).json({
      mgs: "required valid input filed array of numbers",
    });
  } else {
    res.status(200).json({
      kidneylength: respond,
    });
  }
});
// global catches--------------->
// app.use((err, req, res, next) => {
//   res.status(500).json({
//     msg: "bhai server fukgaya hain bad main ana",
//   });
// });
app.listen(3030, () => {
  console.log("Server running on port 3030--------------------->");
});
