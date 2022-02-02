const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const employeeRoute = require("./src/routes/employeeRoute");
const divisionRoute = require("./src/routes/divisionRoute");

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use("/employees", employeeRoute);
app.use("/divisions", divisionRoute);
app.listen(3000);
