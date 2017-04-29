var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mongo');
var geocoder = require('../test/geocoder-test.js')
var request = require('request');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../react-client/dist'));


app.post('/hotels/import', function (req, res) {
  console.log(`\nSearched for: ${req.body.term}`);
  console.log('Using geocoder...');
  searchGeocoder(req.body.term, res);
});

let searchGeocoder = (term, res) => {
  geocoder.geocode(term, (res) => {
    return res;
  })
  .then((data) => {
    // console.log(`\nThere are ${data.length} matches`);
    // console.log('GEO DATA!!', data);
    return data;
  })
  .then((data) => {
    searchGoogleRadar(data, res);
    // update database
    // res.send(data);
  })
  .catch((err) => {
    console.log('ಠ_ಠ');
    console.log(err.message);
  });
}

let searchGoogleRadar = (geoData, res) => {
  console.log('*inside google radar*');

  let city = geoData[0].city;
  let state = geoData[0].administrativeLevels.level1short;
  let zip = geoData[0].zipcode;
  let country = geoData[0].countryCode;
  let loc = `${city}, ${state} ${zip} ${country}`;

  let latitude = geoData[0].latitude;
  let longitude = geoData[0].longitude;
  let radius = 3200;
  let API_KEY = 'AIzaSyAVuPSHMjNYDUqjY_rvl9wHTaVBbFpSQho';

  let base_url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='
  let query_url = `${latitude},${longitude}&radius=${radius}&type=lodging&key=${API_KEY}`;
  let google_places_url = base_url + query_url;

  request(google_places_url, (error, response, body) => {
    let data = JSON.parse(body);
    data.results.loc = loc;
    console.log(loc);
    for (var i = 0; i < data.results.length; i++) {
      data.results[i].loc = loc;
    }
    // console.log(data.results);
    // console.log(`There are ${data.results.length} hotels within ${radius}m of ${zip} in ${city}`);
    res.send(data.results);
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
