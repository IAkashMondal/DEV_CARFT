// Importing the mongoose library to interact with MongoDB
const mongoose = require("mongoose");

// Defining the MongoDB connection URL for the local device
const MongoURl = "mongodb://127.0.0.1:27017/cars";

// Defining a schema for the 'cars' collection
const CarsSchema = new mongoose.Schema(
  {
    car: { type: String, required: true }, // Car model, required
    number: { type: String, required: true, unique: true }, // Unique car number, required
    age: { type: Number, required: true }, // Age of the car, required
    city: { type: String, required: true }, // City where the car is located, required
    isworking: { type: Boolean, default: true }, // Boolean indicating if the car is working, default is true
  },
  {
    versionKey: false, // Disables the "__v" version key added by Mongoose
  }
);

// Creating a model for the 'cars' collection based on the schema
const CarModel = mongoose.model("Car", CarsSchema);

// Asynchronous function to connect to the MongoDB server
const server = async () => {
  try {
    // Connecting to the MongoDB server
    const connection = await mongoose.connect(MongoURl);
    console.log(
      "Connected to the database on the local device--------------->"
    );

    // Fetching data from the database
    // Uncomment the line below to add multiple documents
    // await AddDataMany();

    // Uncomment the line below to add a single document
    // await AddOnedata.save();

    // Fetch all documents from the 'cars' collection
    // const dataRead = await CarModel.find();

    // Fetch documents with specific criteria (e.g., age = 1)
    const dataRead = await CarModel.find({ age: 1 });
    console.log(
      "Data fetched from the database--------------------->\n",
      dataRead
    );
  } catch (err) {
    // Logging an error message if the connection fails
    console.log("Error while connecting to the database");
    console.log(err);
  }
};

// Creating an instance of the CarModel for a single car document
const AddOnedata = new CarModel({
  car: "Bmw M8",
  number: "wb 73 M 0008",
  age: 1,
  city: "slg",
  isworking: true,
});

// Asynchronous function to add multiple documents to the 'cars' collection
const AddDataMany = async () => {
  try {
    // Using insertMany to add multiple documents at once
    await CarModel.insertMany([
      {
        car: "nexon",
        number: "wb 73 bl 8080",
        age: 4,
        city: "slg",
        isworking: true,
      },
      {
        car: "alto",
        number: "wbg 73 7890",
        age: 35,
        city: "slg",
        isworking: false,
      },
      {
        car: "evarest",
        number: "wb 73 BA 0001",
        age: 1,
        city: "slg",
        isworking: true,
      },
    ]);
    console.log("Data added to the database");
  } catch (err) {
    // Logging an error message if adding data fails
    console.log("Error while adding data to the database");
    console.log(err);
  }
};

// Calling the server function to establish the connection and perform operations
server();

/*
Notes: run:node db.js
1. Ensure MongoDB is running on your local machine before executing the script.
2. Uncomment the relevant lines in the 'server' function to add data or fetch all documents as needed:
    - Uncomment `await AddDataMany();` to add multiple documents to the 'cars' collection.
    - Uncomment `await AddOnedata.save();` to add a single document to the 'cars' collection.
    - Uncomment `const dataRead = await CarModel.find();` to fetch all documents from the 'cars' collection.
3. The current setup fetches documents with specific criteria (e.g., age = 1).
4. The 'CarsSchema' defines the structure of the documents in the 'cars' collection.
5. The 'CarModel' is the model based on the 'CarsSchema' that we use to interact with the 'cars' collection.
*/