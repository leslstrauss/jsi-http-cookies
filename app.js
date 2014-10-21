var express = require('express');
var app = express();
var path = requre('path');

app.get('/', function(req, res){
  console.log('cookies: ',);

  res.sendFile(path.join(__dirname, 'index.html'));
});

var server = app.listen(process.env.PORT || 9000, function() {
  console.log('Express server started on %d, server.address().port');
});