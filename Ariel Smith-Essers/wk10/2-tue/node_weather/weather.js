var request = require('request');

request('http://api.openweathermap.org/data/2.5/weather?id=7839805&APPID=7a068535797746ccbb8b24547c6e30ab&units=metric',
function (error, response, body) {
  body = JSON.parse(body);
  console.log(body.main.temp);
});
