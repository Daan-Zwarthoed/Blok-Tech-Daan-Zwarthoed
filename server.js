const express = require("express");
const path = require("path");
const app = express();
const multer = require("multer");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;

app.set("views", "./static/public");
app.set("view engine", "pug");

app.use(express.static("static/public"));
app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
  res.render("Index", { route: "Pages/Filter/Filter.pug", title: "Filteren" });
});

app.get("/filteren", (req, res) => {
  res.render("Index", {
    route: "Pages/Filter/Filter.pug",
    title: "Filteren",
    filterStap: "KiesSpel",
  });
});

app.get("/filteren/rocketleague", (req, res) => {
  res.render("Index", {
    route: "Pages/Filter/Filter.pug",
    title: "Filteren",
    filterStap: "Rocket League",
  });
});
app.get("/filteren/schaken", (req, res) => {
  res.render("Index", {
    route: "Pages/Filter/Filter.pug",
    title: "Filteren",
    filterStap: "Schaken",
  });
});
app.get("/filteren/apexlegends", (req, res) => {
  res.render("Index", {
    route: "Pages/Filter/Filter.pug",
    title: "Filteren",
    filterStap: "Apex Legends",
  });
});
app.get("/filteren/modernwarfare", (req, res) => {
  res.render("Index", {
    route: "Pages/Filter/Filter.pug",
    title: "Filteren",
    filterStap: "Modern Warfare",
  });
});

app.post("/Filter", upload.single("rankProof"), function (req, res, next) {
  res.render("Index", {
    route: "Pages/Filter/Filter.pug",
    title: "Filteren",
    FilterInfo: req.body,
    rankProof: req.file,
  });
});

app.get("/zoeken", (req, res) => {
  res.render("Index", { route: "Pages/Zoeken/Zoeken.pug", title: "Zoeken" });
});

app.post("/zoeken", upload.single("rankProof"), function (req, res, next) {
  res.render("Index", {
    route: "Pages/Zoeken/Zoeken.pug",
    title: "Zoeken",
    filterInfo: req.body,
    rankProof: req.file,
  });
});

app.get("/Berichten", (req, res) => {
  res.render("Index", {
    route: "Pages/Berichten/Berichten.pug",
    title: "Berichten",
  });
});

app.get("*", function (req, res) {
  res.send("404 page not found", 404);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
