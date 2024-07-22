const http = require('http')

const PORT = 4000;

const server = http.createServer((req, res) => {
    console.log("In the API")
    console.log(req.method)
    console.log(req.url)

    if(req.method === 'GET' && req.url.startsWith('/users')){
        res.writeHead(200);
        res.end('all users');
        return;
    }

    res.writeHead(400)
    res.end("Resource not found")
})

server.listen(PORT, () => {
    console.log("Server started on port " + PORT)
})