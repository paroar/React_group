var express = require("express");
var app = express();
var poll = require("./oscarsPoll.json");

app.get("/getOscarsPoll", function(req, res) {
  res.json(poll);
});

app.get("/getOscarsPoll/topic", function(req, res) {
  let queryResults = poll.results.filter(t =>
    t.topic.toLowerCase().includes(req.query.topic.toLowerCase())
  );
  res.json(queryResults);
});

app.get("/getOscarsPoll/nominations", function(req, res) {
  let queryResults = poll.results.filter(ns =>
    ns.nominations.filter(n =>
      n.name
        .toLocaleLowerCase()
        .includes(req.query.nominations.toLocaleLowerCase())
    ).length > 0
  );
  res.json(queryResults);
});

app.listen(3001, function() {
  console.log("Example app listening on port 3001!");
});
