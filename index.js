import http from 'http';

const hostname = '0.0.0.0';
const port = process.env['PORT'] ?? 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end('{"status": "NODE"}\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
