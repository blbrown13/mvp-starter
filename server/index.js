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
  console.log("it's working! it's working!");
  searchGeocoder(req.body.term);
});

let searchGeocoder = (term) => {
  geocoder.geocode(term)
  .then(function(res) {
    console.log(`\nThere are ${res.length} matches\n`);
    console.log(res);
    console.log(res[0].latitude, res[0].longitude);
  })
  .catch(function(err) {
    console.log('ಠ_ಠ');
    console.log(err.message);
  });
}

app.get('/hotels', function (req, res) {
  console.log('-> loaded /hotels');
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
