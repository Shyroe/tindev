const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/tindev-00"),
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection: " + err);
    }
  };

// import models
require("./Dev");
