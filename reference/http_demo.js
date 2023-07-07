const http = require('http');

// create server object
http.createServer((req, res) => {
    // write a res
    res.write('hello world');
    res.end()
}).listen(5001, () => console.log("server running..."))