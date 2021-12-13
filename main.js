var http = require('http');



function onRequest(request, response){
  response.writeHead(200, {'Content-Type':'text/json'});
  response.write(JSON.stringify({blipity: 21}));
  console.log();
  response.end();
}

http.createServer(onRequest).listen(8000);