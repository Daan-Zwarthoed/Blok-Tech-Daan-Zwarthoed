const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('static/public'));

app.get('/', (req, res) => {
  res.sendFile('./static/public/html/index.html', { root: __dirname });
})

app.get('/about', (req, res) => {
  res.sendFile('./static/public/html/about.html', { root: __dirname });
})

app.get('/login', (req, res) => {
  res.sendFile('./static/public/html/login.html', { root: __dirname });
})

app.get('*', function(req, res){
  res.send('404 page not found', 404);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})