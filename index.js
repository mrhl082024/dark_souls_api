const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const { log } = require("console");
const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

const startingClasses = JSON.parse(
  fs.readFileSync(path.join(__dirname, "json/starting_classes.json"), "utf-8")
);

const armorSets = JSON.parse(
  fs.readFileSync(path.join(__dirname, "json/armor.json"), "utf-8")
);

app.get("/", (req, res) => {
  res.send("");
});

//GET Json files
app.get("/startingClasses", (req, res) => {
  res.json(startingClasses);
});

app.get("/armor", (req, res) => {
  res.json(armorSets);
});

app.listen(8000, () => {
  console.log("Running on port: 8000");
});
