// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', (data) => console.log('called listener:', data))

// logger.log('hello world');

const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req.url)
  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    );
  }
});

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));
