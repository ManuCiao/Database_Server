var express = require('express');
var app = express();
var fs = require('fs');
var port = 4000;
var db = {};

app.get('/', function(request, response) {
    response.send('Hello World!');
});

app.get('/set', function(req, res) {
    var logs = [];
    for (var key in req.query) {
        db[key] = req.query[key];
        logs.push('Data has been saved as: {' + key + ':' + req.query[key] + '}');
    }
    fs.writeFile('db.json', JSON.stringify(db), function(err) {
        if (err) throw err;
        res.send('Data successfully saved on the db.json file');
        res.end(logs.join(','));
    });
});

app.get('/get', function(req, res) {
    fs.readFile('db.json', function(err, data) {
        if (err) throw err;
        json = JSON.parse(data);
        for(var myKey in json) {
          res.send("The value of " +myKey+ " is " +json[myKey]);
        }
    });
});

app.listen(port, function(err) {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`server is listening on ${port}`);
});
