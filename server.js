const express = require('express');
const app = express();
const port = 8080;

app.set('views', './static/public')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index', {route: 'pages/profiel/profiel.pug'});
})

app.get('/zoeken', (req, res) => {
  res.render('index', {route: 'pages/zoeken/zoeken.pug'});
})

app.get('/berichten', (req, res) => {
  res.render('index', {route: 'pages/berichten/berichten.pug'});
})

app.get('*', function(req, res){
  res.send('404 page not found', 404);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})