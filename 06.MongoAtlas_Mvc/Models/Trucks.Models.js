const mongoose = require("mongoose");
// Define the Truck schema
const TruckSchema = new mongoose.Schema(
  {
    owner: { type: String, required: true }, // Owner of the truck
    number: { type: String, required: true, unique: true }, // Truck number, must be unique
    weight: { type: String, required: true }, // Weight of the truck
    available: { type: Boolean, required: true }, // Availability status of the truck
  },
  {
    versionKey: false, // Disable versioning (__v field)
  }
);

// Create the Truck model
const TruckModel = mongoose.model("Truck", TruckSchema); // Create a model named 'Jcbs' using the JcbsSchema
module.exports = TruckModel; // Export the Jcbs model for use in other parts of the application
