var express = require('express');
var app = express();
var poll = require('./oscarsPoll.json');

app.get('/getOscarsPoll', function (req, res) {
  res.json(poll);
});

app.get('/getOscarsPoll/topic', function (req, res) {
  let queryResults = poll.results.filter((t) =>  t.topic.includes(req.query.topic));

  res.json(queryResults);
  //res.json(poll);
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
