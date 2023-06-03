const mongoose = require("mongoose");

const connectDB = (uri) => {
  return mongoose.connect(
    uri,
    {
      dbName: "eventXmumbai",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    console.log("MongoDB Connected")
  );
};

module.exports = connectDB;
