const http = require('http');

const server = http.createServer(function(req,res){
    res.end("Hi Selamat datang di node js");
});

server.listen(8000);

console.log("server running on httpL//localhost:8000");