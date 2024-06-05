// Import the necessary modules and functions
const { connectToDatabase } = require("./Config/db.js"); // Database connection function
const express = require("express"); // Express framework
require("dotenv").config(); // Load environment variables from .env file
const JcbModel = require("./Models/Jcb.Models.js"); // Mongoose model for Jcbs
const TruckModel = require("./Models/Trucks.Models.js"); // Mongoose model for Trucks
const TruckRouter = require("./Routes/Trucks.Routes.js"); // Router for Truck-related routes
const JcbRouter = require("./Routes/Jcbs.Routes.js"); // Router for Jcb-related routes

const app = express(); // Create an Express app
app.use(express.json()); // Middleware to parse JSON requests

// Define a route to get all Jcb and Truck data based on query parameters
app.get("/api/All", async (req, res) => {
  try {
    const query = req.query; // Get query parameters from request
    const Jcbdata = await JcbModel.find(query); // Fetch Jcbs from the database based on query parameters
    const Truckdata = await TruckModel.find(query); // Fetch trucks from the database based on query parameters
    res.json({
      data: { Jcbdata, Truckdata }, // Respond with the fetched data
    });
  } catch (err) {
    res.status(500).json({
      msg: "Error fetching data from the database",
      error: err.message,
    });
  }
});

// Use the routers for specific routes
app.use("/api/trucks", TruckRouter);
app.use("/api/jcbs", JcbRouter);

// Start the server and connect to the database
const PORT = process.env.PORT || 3000; // Define the port, default to 3000 if not set in .env
app.listen(PORT, async () => {
  try {
    await connectToDatabase(); // Connect to the database
    console.log(`DB is connected and server is running on port ${PORT}`);
  } catch (err) {
    console.error("Server connection failed with DB");
    console.error(err);
  } finally {
    console.log(`Server running on port ${PORT}`);
  }
});
