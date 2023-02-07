const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require('path');

require("dotenv").config();

const port = 8000;

const router = require("./routes/index");

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/trustified/api", router);

app.use(express.static(path.join(__dirname, "public")));

app.get("/css", function (req, res) {
  res.redirect("index.css");
});

app.get("/js", function (req, res) {
  res.redirect("trustified.js");
});

app.listen(port, function () {
  console.log("Runnning on " + port);
});

module.exports = app;
