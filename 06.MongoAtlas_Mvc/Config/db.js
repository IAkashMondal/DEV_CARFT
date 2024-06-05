const mongoose = require("mongoose"); // Import Mongoose
require("dotenv").config(); // Load environment variables from a .env file

const URL_MONGO = process.env.URL_MONGO; // Get the MongoDB connection string from environment variables

// Check if the MongoDB connection Url
if (!URL_MONGO) {
  console.error(
    "MongoDB connection URl Not Present. Please check your .env file."
  );
  process.exit(1); // Exit the process if the connection 
}

// Function to connect to the MongoDB database
const connectToDatabase = async () => {
  try {
    await mongoose.connect(URL_MONGO, {
      useNewUrlParser: true, // Use the new URL parser to avoid deprecation warnings
      useUnifiedTopology: true, // Use the unified topology engine for MongoDB driver
      useCreateIndex: true, // Use createIndex() instead of ensureIndex() to avoid deprecation warnings
      useFindAndModify: false, // Use native findOneAndUpdate() instead of findAndModify() to avoid deprecation warnings
    });
    console.log("Connected to the database successfully!"); // Log a success message
  } catch (err) {
    console.error("Error connecting to the MongoDB database", err); // Log the error if connection fails
    process.exit(1); // Exit the process if the connection fails
  }
};

module.exports = connectToDatabase; // Export the connectToDatabase function
