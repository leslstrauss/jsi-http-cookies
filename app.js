var express = require('express');
var app = express();
var path = require('path');


var lastID = 0;

app.use(require('cookie-parser')());

app.get('/', function(req, res){
  var lastRequestTime = req.cookies['last-request-time'];
  var id = req.cookies.id;
  if (!id) {
    id = lastID++;
  }

  console.log('last requst made by %d was %d seconds ago', id, (Date.now() - lastRequestTime) / 1000);

  res.cookie('last-request-time', Date.now());
  res.cookie('id', id);

  res.sendFile(path.join(__dirname, 'index.html'));
});

var server = app.listen(process.env.PORT || 9000, function() {
  console.log('Express server started on %d', server.address().port);
});

