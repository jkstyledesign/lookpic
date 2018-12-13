
var http = require("http");

var options = {
  "method": "POST",
  "hostname": "localhost",
  "port": "3000",
  "path": "/Tasks",
  "headers": {
    "content-type": "application/json",
    "cache-control": "no-cache",
    "postman-token": "be3ee6e0-f0d7-e783-e13c-5f9f9d437a40"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({ Id: '7', Title: 'By Jagdish', Status: 'pending' }));
req.end();