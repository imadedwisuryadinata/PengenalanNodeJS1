const http = require('http');
const url = require('url')

const server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type' : 'text/html'})
    const query = url.parse(req.url, true).query
    const response = "keyword : " + query.keyword
    console.log(query)
    res.write(response)
    res.end()
});

server.listen(8000);

console.log("server running on http//localhost:8000");