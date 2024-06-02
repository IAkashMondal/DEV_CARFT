const express = require("express");

const app = express();
app.use(express.json());

let users = [
  {
    name: "ram",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

// Route to get kidneys information
app.get("/", (req, res) => {
  try {
    const userKidneys = users[0].kidneys;
    const totalKidneys = userKidneys.length;
    const healthyKidneys = userKidneys.filter(
      (kidney) => kidney.healthy
    ).length;
    const unhealthyKidneys = totalKidneys - healthyKidneys;

    res.status(200).json({
      totalKidneys,
      healthyKidneys,
      unhealthyKidneys,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Route to add a new kidney
app.post("/add", (req, res) => {
  try {
    const newKidney = req.body.healthy;
    users[0].kidneys.push({ healthy: newKidney });

    res.status(201).json({ message: "Kidney added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Route to update all kidneys to healthy
app.put("/update", (req, res) => {
  if (unhealthyKidneys > 0) {
    try {
      users[0].kidneys.forEach((kidney) => {
        kidney.healthy = true;
      });
      res.status(200).json({ message: "All kidneys updated to healthy" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    return res.status(400).json({ message: "No unhealthy kidneys to update" });
  }
});

// Route to delete all unhealthy kidneys
app.delete("/delete", (req, res) => {
  try {
    const userKidneys = users[0].kidneys;
    const unhealthyKidneys = userKidneys.filter(
      (kidney) => !kidney.healthy
    ).length;
    if (unhealthyKidneys > 0) {
      users[0].kidneys = userKidneys.filter((kidney) => kidney.healthy);
      res.status(200).json({ message: "Unhealthy kidneys deleted" });
    } else {
      return res
        .status(400)
        .json({ message: "No unhealthy kidneys to delete" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// the server
app.listen(5050, () => {
  console.log("Server running on port 5050");
});
