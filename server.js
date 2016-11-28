var http = require("http");
var server = http.createServer(function(request, response) {
  response.writeHeader(200, {"Content-Type": "text/plain"});
  response.write("Hello World!!");
  response.end();
});

server.listen(4000, function(){
  console.log("Server is listening on port 4000");
});
