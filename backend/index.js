const http = require('http');

const PORT = 3050;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Backend!');
});

server.listen(PORT, () => {
  console.log(`Backend is running on port ${PORT}`);
});