var express = require('express');
var app = express();
var fs = require('fs');
var port = 4000;
var db = {};

app.get('/', function(request, response) {
  response.send('Hello World!');
});


app.get('/set', function (req, res, next) {
  var logs = [];
  for (var key in req.query) {
    db[key] = req.query[key];
    console.log(key, req.query[key]);
    logs.push('Data has been saved as: {' + key + ':' + req.query[key] + '}');
  }
  fs.writeFile('db.json', JSON.stringify(db), function (err)   {
    if (err) return next(err);
    res.send('Data successfully saved');
    res.end(logs.join('\n'));
  });
});


app.listen(port, function(err)  {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});
