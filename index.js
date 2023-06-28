const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./db");
const Port = 3000;
const employeeRoutes = require("./controllers/employee.controller");
const cors = require('cors')

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use("/api/employees", employeeRoutes);

connectDB()
  .then(() => {
    console.log("db connection successfully!");
    app.listen(Port, () => console.log(`server started at ${Port}`));
  })
  .catch((err) => {
    console.log("Connection fail! " + err);
  });
