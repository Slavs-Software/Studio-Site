//NodeJS script for create local server
var http = require("http");

http.createServer(function(request,response){
	response.end();
}).listen(8080, "127.0.0.1", function(){
	console.log("Сервер начал работу");
});