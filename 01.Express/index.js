const express = require("express");

const app = express();
app.use(express.json());
var users = [
  {
    name: "ram",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", (req, res) => {
  const userKidneys = users[0].kidneys;
  const totalKidneys = users[0].kidneys.length;
  let healthyKidneys = 0;
  for (let i = 0; i < totalKidneys; i++) {
    if (userKidneys[i].healthy) {
      healthyKidneys = healthyKidneys + 1;
    }
  }
  let unhealthykidneys = totalKidneys - healthyKidneys;
  res.status(200).json({
    totalKidneys,
    healthyKidneys,
    unhealthykidneys,
  });
});

app.post("/add", (req, res) => {
  const newkidney = req.body.healthy;
  users[0].kidneys.push({
    healthy: newkidney,
  });
  res.status(200).json({
    msg: "added",
  });
});
app.put("/update", (req, res) => {
  const userKidneys = users[0].kidneys.length;
  for (let i = 0; i < userKidneys; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({
    msg: "kidneys updated",
  });
});
app.delete("/delete", (req, res) => {
  const newkidneys = [];

  const userKidneys = users[0].kidneys.length;
  for (let i = 0; i < userKidneys; i++) {
    if (users[0].kidneys[i].healthy) {
      newkidneys.push({ healthy: true });
    }
  }
  users[0].kidneys = newkidneys;
  res.json({
    msg: "deleted",
  });
});
app.listen(5050, () => {
  console.log("server running on port 5050");
});
