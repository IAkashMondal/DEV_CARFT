const fs = require("fs");
const path = require("path");

const records = []; 

const TimeTakenMiddleware = (req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const end = Date.now();
    const timeTaken = end - start;
    const recordData = {
      method: req.method,
      url: req.originalUrl,
      startTime: start,
      endTime: end,
      timeTaken,
    };
    saveRequestData(recordData);
  });
  next();
};

const saveRequestData = (recordData) => {
  records.push(recordData);

  // Construct the file path
  const filePath = path.join(__dirname, "..", "data", "datarecords.js");

  // Write to the file
  try {
    fs.writeFileSync(filePath, JSON.stringify(records, null, 2));
    console.log("Records saved to file");
  } catch (err) {
    console.error("Error writing file:", err);
  }
};

module.exports = TimeTakenMiddleware;
