require("dotenv").config();
const express = require("express");
const app = express();

const schoolRoutes = require("./routes/schoolRoutes");

app.use(express.json());

app.use("/", schoolRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});