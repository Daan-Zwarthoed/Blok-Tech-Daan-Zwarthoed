const express = require('express');
const app = express();
const port = 8080;

app.set('views', './static/public')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index', {route: 'pages/profiel/profiel.pug', title: 'Profiel'});
})

app.get('/filteren', (req, res) => {
  res.render('index', {route: 'pages/profiel/profiel.pug', title: 'Filteren', filterStap: 'KiesSpel'});
})

app.get('/filteren/rocketleague', (req, res) => {
  res.render('index', {route: 'pages/profiel/profiel.pug', title: 'Filteren', filterStap: 'Rocket League'});
})
app.get('/filteren/schaken', (req, res) => {
  res.render('index', {route: 'pages/profiel/profiel.pug', title: 'Filteren', filterStap: 'Schaken'});
})
app.get('/filteren/apexlegends', (req, res) => {
  res.render('index', {route: 'pages/profiel/profiel.pug', title: 'Filteren', filterStap: 'Apex Legends'});
})
app.get('/filteren/modernwarfare', (req, res) => {
  res.render('index', {route: 'pages/profiel/profiel.pug', title: 'Filteren', filterStap: 'Modern Warfare'});
})

app.get('/zoeken', (req, res) => {
  res.render('index', {route: 'pages/zoeken/zoeken.pug', title: 'Zoeken'});
})

app.get('/berichten', (req, res) => {
  res.render('index', {route: 'pages/berichten/berichten.pug', title: 'Berichten'});
})

app.get('*', function(req, res){
  res.send('404 page not found', 404);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})