const express=require("express")
const TruckModel = require("../Models/Trucks.Models.js");
const TruckRouter=express.Router();
// GET endpoint to fetch trucks
TruckRouter.get("/", async (req, res) => {
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
TruckRouter.post("/add", async (req, res) => {
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
TruckRouter.patch("/status-update/:id", async (req, res) => {
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
TruckRouter.delete("/remove/:id", async (req, res) => {
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

module.exports=TruckRouter;