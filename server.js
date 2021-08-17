const express = require("express");

const PORT = 5000;

const app = express();
const productRoutes = require("./routes");
const mongoose = require("mongoose");

const mongoUri =
  "mongodb+srv://DaiVernon:Daivernon1!@cluster0.qzvfd.mongodb.net/practice_TDD?retryWrites=true&w=majority";

mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.error(err));

app.use("/api/products", productRoutes);

app.get("/", (req, res) => res.send("Hello World"));

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);
