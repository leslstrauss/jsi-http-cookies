var express = require('express');
var app = express();
var path = requre('path');

app.use(require('cookie-parser')());

app.get('/', function(req, res){
  var lastRequestTime = req.cookies['last-request-time'];
  var id = req.cookies.id;
  if (!id) {
    id = lastID++;
  }

  res.cookie('last-request-time', Date.now());
  res.cookie('id', id);

  res.sendFile(path.join(__dirname, 'index.html'));
});

var server = app.listen(process.env.PORT || 9000, function() {
  console.log('Express server started on %d, server.address().port');
});

