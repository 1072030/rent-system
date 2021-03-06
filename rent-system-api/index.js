"use strict";

const express = require("express");

const cors = require("cors");
const Dotenv = require("dotenv");
Dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/session", (req, res) => {
  console.log(req.params);
});
// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
