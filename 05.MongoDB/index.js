const { server, TruckModel } = require("./db.js"); // Import the database connection function and TruckModel
const express = require("express"); // Import Express
const app = express(); // Create an Express app
app.use(express.json()); // Middleware to parse JSON requests

// GET endpoint to fetch trucks
app.get("/trucks", async (req, res) => {
  try {
    const query = req.query; // Get query parameters from request
    const data = await TruckModel.find(query); // Fetch trucks from the database based on query parameters
    res.json({
      data: data, // Respond with the fetched data
    });
  } catch (err) {
    res.status(500).json({
      msg: "Error fetching trucks from database",
      error: err.message,
    });
  }
});

// POST endpoint to add a new truck
app.post("/add-Trucks", async (req, res) => {
  try {
    const data = req.body; // Get truck data from request body
    const Truck = new TruckModel(data); // Create a new Truck instance
    await Truck.save(); // Save the truck to the database
    console.log("Data added", data);
    res.status(200).json({
      Truck, // Respond with the saved truck data
    });
  } catch (err) {
    res.status(500).json({
      msg: "Error adding truck to database",
      error: err.message,
    });
  }
});

// PATCH endpoint to Edit a truck's available status
app.patch("/status-update/:id", async (req, res) => {
  const truckId = req.params.id; // Get truck ID from request parameters
  const payload = req.body; // Get updated data from request body
  try {
    await TruckModel.findByIdAndUpdate(truckId, payload); // Update the truck's data in the database
    console.log("Data updated", payload);
    res.status(200).json({
      msg: "Truck status updated successfully", // Respond with a success message
    });
  } catch (err) {
    res.status(500).json({
      msg: "Error updating truck's status in the database",
      error: err.message,
    });
  }
});

// PATCH endpoint to Edit a truck's available status
app.delete("/remove-Truck/:id", async (req, res) => {
  const truckId = req.params.id; // Get truck ID from request parameters
  try {
    await TruckModel.findByIdAndDelete(truckId); // Update the truck's data in the database
    console.log("truck No longer With us", truckId);
    res.status(200).json({
      msg: "Truck Partnership ended successfully", // Respond with a success message
    });
  } catch (err) {
    res.status(500).json({
      msg: "Error deleting truck in the database",
      error: err.message,
    });
  }
});

// Start the server and connect to the database
const PORT = 3080;
app.listen(PORT, async () => {
  try {
    await server(); // Connect to the database
    console.log(`DB is connected and server is running on port ${PORT}`);
  } catch (err) {
    console.log("Server connection failed with DB");
    console.log(err);
  } finally {
    console.log(`Server running on port ${PORT}`);
  }
});
