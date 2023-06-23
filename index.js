const express = require("express");
const app = express();
const cors = require("cors");
const { readdirSync } = require("fs");
const { connectDb } = require("./db/db");

// requiring other modules
require("dotenv").config(); // Linked .env files here
// require("./openaiConfig")

// middlewares
app.use(express.json());
app.use(cors());

// routes
readdirSync("./routes").map((route) => {
  app.use("/api/v1", require("./routes/" + route));
});

// app listening
app.listen(process.env.PORT, () => {
  connectDb(); //calling the database when the server starts
  console.log(`Connected to PORT:${process.env.PORT}`);
});
