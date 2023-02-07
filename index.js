const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

require("dotenv").config();

const port = 8000;

const router = require("./routes/index");
const jsFile = require("./widget/trustified");
const cssFile = require("./widget/index.css");

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/trustified/api", router);
app.use("/trustified/loginwithtrustified", jsFile);
app.use("/trustified/css", cssFile);

app.listen(port, function () {
  console.log("Runnning on " + port);
});

module.exports = app;
