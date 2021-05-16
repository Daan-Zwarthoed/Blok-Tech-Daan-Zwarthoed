const express = require("express");
const path = require("path");
const app = express();
const multer = require("multer");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;

app.set("views", path.join(__dirname, "static/public"));
app.set("view engine", "pug");

app.use(express.static("static/public"));
app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.locals.basedir = "static/public";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "static/public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
let upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.render("Pages/Zoeken/Zoeken", { title: "Zoeken" });
});

app.get("/profiel", (req, res) => {
  res.render("Pages/Profiel/Profiel", {
    title: "Profiel",
  });
});

app.get("/profiel/filteren", (req, res) => {
  res.render("Pages/Profiel/KiesSpel/KiesSpel", {
    title: "Profiel",
  });
});

app.get("/profiel/filteren/rocketleague", (req, res) => {
  res.render("Pages/Profiel/Filteren/Filteren", {
    title: "Profiel",
    filterStap: "Rocket League",
  });
});
app.get("/profiel/filteren/schaken", (req, res) => {
  res.render("Pages/Profiel/Filteren/Filteren", {
    title: "Profiel",
    filterStap: "Schaken",
  });
});
app.get("/profiel/filteren/apexlegends", (req, res) => {
  res.render("Pages/Profiel/Filteren/Filteren", {
    title: "Profiel",
    filterStap: "Apex Legends",
  });
});
app.get("/profiel/filteren/modernwarfare", (req, res) => {
  res.render("Pages/Profiel/Filteren/Filteren", {
    title: "Profiel",
    filterStap: "Modern Warfare",
  });
});

app.post("/profiel", upload.none(), function (req, res, next) {
  res.render("Pages/Profiel/Filteren/Filteren", {
    title: "Profiel",
    FilterInfo: req.body,
  });
});

app.get("/zoeken", (req, res) => {
  res.render("Pages/Zoeken/Zoeken", { title: "Zoeken" });
});

app.post("/zoeken", upload.none(), function (req, res, next) {
  console.log("hey");
  console.log(req.body);
  res.render("Pages/Zoeken/Zoeken", {
    title: "Zoeken",
    filterInfo: req.body,
  });
});

app.get("/Berichten", (req, res) => {
  res.render("Pages/Berichten/Berichten", {
    title: "Berichten",
  });
});

app.get("*", function (req, res) {
  res.send("404 page not found", 404);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
