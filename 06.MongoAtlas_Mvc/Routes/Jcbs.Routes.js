const express = require("express");
const JcbModel = require("../Models/Jcb.Models.js");
const JcbRouter = express.Router();
// GET endpoint to fetch Jcbs
JcbRouter.get("/", async (req, res) => {
  try {
    const query = req.query; // Get query parameters from request
    const data = await JcbModel.find(query); // Fetch Jcbs from the database based on query parameters
    res.json({
      data: data, // Respond with the fetched data
    });
  } catch (err) {
    res.status(500).json({
      msg: "Error fetching Jcbs from database",
      error: err.message,
    });
  }
});

// POST endpoint to add a new Jcb
JcbRouter.post("/add", async (req, res) => {
  try {
    const data = req.body; // Get Jcb data from request body
    const Jcb = new JcbModel(data); // Create a new Jcb instance
    await Jcb.save(); // Save the Jcb to the database
    console.log("Data added", data);
    res.status(200).json({
      Jcb, // Respond with the saved Jcb data
    });
  } catch (err) {
    res.status(500).json({
      msg: "Error adding Jcb to database",
      error: err.message,
    });
  }
});

// PATCH endpoint to Edit a Jcb's available status
JcbRouter.patch("/status-update/:id", async (req, res) => {
  const JcbId = req.params.id; // Get Jcb ID from request parameters
  const payload = req.body; // Get updated data from request body
  try {
    await JcbModel.findByIdAndUpdate(JcbId, payload); // Update the Jcb's data in the database
    console.log("Data updated", payload);
    res.status(200).json({
      msg: "Jcb status updated successfully", // Respond with a success message
    });
  } catch (err) {
    res.status(500).json({
      msg: "Error updating Jcb's status in the database",
      error: err.message,
    });
  }
});

// PATCH endpoint to Edit a Jcb's available status
JcbRouter.delete("/remove/:id", async (req, res) => {
  const JcbId = req.params.id; // Get Jcb ID from request parameters
  try {
    await JcbModel.findByIdAndDelete(JcbId); // Update the Jcb's data in the database
    console.log("Jcb No longer With us", JcbId);
    res.status(200).json({
      msg: "Jcb Partnership ended successfully", // Respond with a success message
    });
  } catch (err) {
    res.status(500).json({
      msg: "Error deleting Jcb in the database",
      error: err.message,
    });
  }
});
module.exports= JcbRouter;