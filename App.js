const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const env = require("dotenv");
const dbConnection = require("./Utils");
const router = require("./Roots/userRoutes");
env.config();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use("App.js","./App.js");
dbConnection()
 app.use(cors());
app.get("/", (req, res) => {
  res.send("port");
});
app.use("/api",router);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
