const mongoose = require("mongoose");

// MongoDB connection URL
const MongoURl = "mongodb://127.0.0.1:27017/Trucks";

// Function to connect to the MongoDB server
const server = async () => {
  try {
    // Await the connection to the MongoDB server with specified options
    await mongoose.connect(MongoURl);
    console.log("Connected to the database on the local device");
  } catch (err) {
    console.error("Error while connecting to the database");
    console.error(err);
  }
};

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
const TruckModel = mongoose.model("Truck", TruckSchema);

// Export the server connection function and TruckModel
module.exports = { server, TruckModel };

// Explanation and Notes
// db.js:

// MongoDB URL: The URL to connect to your local MongoDB instance.
// server function: An asynchronous function that connects to the MongoDB server using Mongoose.
// TruckSchema: Defines the schema for the Truck collection, specifying the structure and constraints for each document.
// TruckModel: A model based on the TruckSchema, which provides an interface for interacting with the Trucks collection in MongoDB.
