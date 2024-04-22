const fs = require("fs");
const express = require("express");
const app = express();
app.use(express.json());
const users = [
  {
    name: "john",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];
app.get("/", (req, res) => {
  const num = req.query.num;
  const ans = sum(num);
  res.send(`your sum : ${ans}`);
});
app.get("/api/kidneys", (req, res) => {
  const jhon_kidneys = users[0].kidneys;
  const TotalKidneys = jhon_kidneys.length;
  let NumOfHealthykidneys = 0;
  for (let i = 0; i < jhon_kidneys.length; i++) {
    if (jhon_kidneys[i].healthy) {
      NumOfHealthykidneys = NumOfHealthykidneys + 1;
    }
  }
  const NumOfUnHealtyKidneys = TotalKidneys - NumOfHealthykidneys;
  res.json({
    TotalKidneys,
    NumOfHealthykidneys,
    NumOfUnHealtyKidneys,
  });
});

app.post("/api/add", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: `kidne add ${isHealthy}`,
  });
});

app.put("/api/kidney/opration", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.status(200).json({
    msg: "kidney theek hogaya abb pina band kar",
  });
});
const server = app.listen(8001, () => {
  console.log("server runing on port 8001");
});
const sum = (num) => {
  let value = 0;
  for (i = 1; i <= num; i++) {
    value = value + i;
  }
  return value;
};
