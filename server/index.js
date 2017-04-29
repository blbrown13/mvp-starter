var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mongo');
var geocoder = require('../test/geocoder-test.js')

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../react-client/dist'));


app.post('/hotels/import', function (req, res) {
  console.log(`Searched for: ${req.body.term}`);
  console.log('Using geocoder...');
  searchGeocoder(req.body.term, res);
});

let searchGeocoder = (term, res) => {
  geocoder.geocode(term, (res) => {
    return res;
  })
  .then((data) => {
    console.log(`\nThere are ${data.length} matches\n`);
    console.log(data);
    console.log('LAT/LONG:', data[0].latitude, data[0].longitude);
    res.send(data);
    // return data;
  })
  // .then((data) => {
  //  update database
  //   console.log('inside the then');
  //   console.log(data);
  //   res.send(data);
  // })
  .catch((err) => {
    console.log('ಠ_ಠ');
    console.log(err.message);
  });
}

app.get('/hotels', function (req, res) {
  console.log('-> GET loaded /hotels');
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/', function (req, res) {
  console.log('-> GET loaded /');
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
