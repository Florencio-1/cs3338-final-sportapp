const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <h1>SportHub Frontend Placeholder</h1>
    <p>Docker is running successfully for SportHub.</p>
    <p>Backend: http://localhost:4000</p>
  `);
});

server.listen(PORT, () => {
  console.log(`Frontend placeholder running on http://localhost:${PORT}`);
});
