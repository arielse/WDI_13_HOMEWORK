var http = require('http');
var fs = require('fs');

var app = function(request, response) {
  var path = request.url;

  if (path === '/about') {
    fs.readFile('post_codes.csv', 'utf-8', function(err, data) {
      var postcodes = data.split('\n');
      var headings = postcodes[0].split(',');
      postcodes.shift();
      // var pcJson = JSON.stringify(data);
      for (var i = 0; i < postcodes.length; i++) {
        var dataRow = postcodes[i].split(',');
        dataObject = {};
        for (var j = 0; j < headings.length; j++) {
          var key = headings[j];
          var value = dataRow[j];
          dataObject[key] = value;
        }
        
      }
      response.writeHead(200, {'Content-Type':'application/json'});
      response.write(data);
      response.end();
    })

  } else {
    response.writeHead(200);
    response.write('hello world');
    response.end();
  }
};



var server = http.createServer( app );
server.listen(3000);
