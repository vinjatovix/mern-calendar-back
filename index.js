require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.static("public"));

app.use("/api/auth", require("./routes"));

app.listen(process.env.PORT || 8337, () => {
  console.log(`Bender listening on ${process.env.HOST}:${process.env.PORT}`);
});
