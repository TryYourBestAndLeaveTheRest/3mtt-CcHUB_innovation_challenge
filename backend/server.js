const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
app.get("/chatme", (req, res) => {
  res.send({ mssg: "api is working well here" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
