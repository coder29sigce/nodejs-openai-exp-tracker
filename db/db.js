const mongoose = require("mongoose");

// Connection function
const connectDb = async (req, res) => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    if (connection) {
      console.log("Connection Established⚡");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectDb };
