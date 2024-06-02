// this code is optimised 
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
    const userKidneys = users[0].kidneys; // Fetch user's kidneys
    const totalKidneys = userKidneys.length;
    let healthyKidneys = 0;

    // Count the number of healthy kidneys using for of loop
    for (let kidney of userKidneys) {
      if (kidney.healthy) {
        healthyKidneys++;
      }
    }

    let unhealthyKidneys = totalKidneys - healthyKidneys; // Calculate unhealthy kidneys

    // Respond with the kidney data
    res.status(200).json({
      totalKidneys,
      healthyKidneys,
      unhealthyKidneys,
    });
  } catch (error) {
    console.error(error); // Log the error
    res.status(500).json({ message: "Internal server error" }); // Respond with error message
  }
});

// Route to add a new kidney
app.post("/add", (req, res) => {
  try {
    const newKidney = req.body.newkidney;

    // Check if newKidney is a boolean
    if (typeof newKidney !== "boolean") {
      return res
        .status(400)
        .json({ message: "Invalid input. 'newkidney' should be a boolean." });
    }

    // Add the new kidney to the user's kidneys array
    users[0].kidneys.push({ healthy: newKidney });

    // Respond with success message
    res.status(201).json({ message: "Kidney added successfully" });
  } catch (error) {
    console.error(error); // Log the error
    res.status(500).json({ message: "Internal server error" }); // Respond with error message
  }
});

// Start the server
app.listen(5050, () => {
  console.log("Server running on port 5050");
});
