// npm run dev: to run node file with nodemon
// npm run start: to run node file normally

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  //render
  //async
  res.send("Server is running");
});

app.post("/signup", (req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => console.log("Server is running on port", PORT));
