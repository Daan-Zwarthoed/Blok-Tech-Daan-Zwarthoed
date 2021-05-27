/* eslint-disable no-undef */
const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const localStorage = require("local-storage");
const MongoClient = require("mongodb").MongoClient;
const port = process.env.PORT || 8080;
const connectionString = process.env.DATABASE_URL;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "static/public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.locals.basedir = path.join(__dirname, "views");

MongoClient.connect(connectionString)
  .then((client) => {
    db = client.db("my-matching-app");
    filterCollection = db.collection("filters");
    userCollection = db.collection("users");
  })
  .catch((error) => console.error(error));

app.post("/zoeken", (req, res) => {
  userCollection
    .find()
    .toArray()
    .then((results) => {
      backendUsers = results;
    });

  localStorage.set("name", req.body.name);

  filterCollection
    .findOne({ name: req.body.name })
    .then(() => {
      if (req.body.game) {
        return filterCollection.findOneAndUpdate(
          { name: req.body.name },
          {
            $set: {
              name: req.body.name,
              game: req.body.game,
              rankedOfCasual: req.body.rankedOfCasual,
              rank: req.body.rank,
              mode: req.body.mode,
            },
          },
          {
            upsert: true,
          }
        );
      }
    })
    .then(() => {
      filterCollection
        .findOne({ name: req.body.name })
        .then((resultUpdated) => {
          res.render("pages/zoeken/zoeken", {
            title: "Zoeken",
            filterInfo: resultUpdated,
            backendUsers: backendUsers,
          });
        });
    })
    .catch((error) => console.error(error));
});

app.get("/", (req, res) => {
  res.render("pages/login/login", { title: "Login" });
});

app.get("/profiel", (req, res) => {
  filterCollection
    .findOne({ name: localStorage.get("name") })
    .then((result) => {
      res.render("pages/profiel/profiel", {
        title: "Profiel",
        filterInfo: result,
      });
    });
});

app.get("/profiel/filteren", (req, res) => {
  res.render("pages/profiel/kiesSpel/kiesSpel", {
    title: "Profiel",
  });
});

app.get("/profiel/filteren/rocketleague", (req, res) => {
  res.render("pages/profiel/filteren/filteren", {
    title: "Profiel",
    filterStap: "Rocket League",
    name: localStorage.get("name"),
  });
});
app.get("/profiel/filteren/schaken", (req, res) => {
  res.render("pages/profiel/filteren/filteren", {
    title: "Profiel",
    filterStap: "Schaken",
    name: localStorage.get("name"),
  });
});
app.get("/profiel/filteren/apexlegends", (req, res) => {
  res.render("pages/profiel/filteren/filteren", {
    title: "Profiel",
    filterStap: "Apex Legends",
    name: localStorage.get("name"),
  });
});
app.get("/profiel/filteren/modernwarfare", (req, res) => {
  res.render("pages/profiel/filteren/filteren", {
    title: "Profiel",
    filterStap: "Modern Warfare",
    name: localStorage.get("name"),
  });
});

app.post("/profiel", function (req, res) {
  res.render("pages/profiel/profiel", {
    title: "Profiel",
    filterInfo: req.body,
  });
});

app.get("/zoeken", (req, res) => {
  userCollection
    .find()
    .toArray()
    .then((results) => {
      backendUsers = results;
    });

  filterCollection
    .findOne({ name: localStorage.get("name") })
    .then((result) => {
      res.render("pages/zoeken/zoeken", {
        title: "Zoeken",
        filterInfo: result,
        backendUsers: backendUsers,
      });
    });
});

app.get("/Berichten", (req, res) => {
  res.render("pages/berichten/berichten", {
    title: "Berichten",
  });
});

app.get("*", function (req, res) {
  res.send("404 page not found", 404);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
