// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

//TODO GET ALL FILES IN ZIPS FODLER

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

//for zip upload
app.post('/upload', function(request, response) {
  /*
  1. Receive bytes
  2. Write to file to be wiped
  */
});

//for giving token, repo url, and zip receipt
app.post('/api', function(request, response) {
  /*
  1. Get git tokens
  2. Get git url
  3. Make quarantine folder w/ unique case ID
  4. Clone git repo
  5. Make subfolder and unzip
  6. Commit
  7. Push
  */
  console.log(requests.body);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
