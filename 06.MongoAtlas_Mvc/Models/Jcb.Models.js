const mongoose = require("mongoose"); // Import Mongoose

// Define the Jcbs schema
const JcbsSchema = new mongoose.Schema(
  {
    owner: { type: String, required: true }, // Owner of the Jcbs; required field
    number: { type: String, required: true, unique: true }, // Jcbs number; must be unique and required
    available: { type: Boolean, required: true }, // Availability status of the Jcbs; required field
  },
  {
    versionKey: false, // Disable the versioning field (__v)
  }
);

// Create and export the Jcbs model
const JcbsModel = mongoose.model("Jcbs", JcbsSchema); // Create a model named 'Jcbs' using the JcbsSchema
module.exports = JcbsModel; // Export the Jcbs model for use in other parts of the application
