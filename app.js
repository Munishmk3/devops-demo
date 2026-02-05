const http = require('http');
const client = require('prom-client');

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

http.createServer((req, res) => {
  if (req.url === '/metrics') {
    res.setHeader('Content-Type', client.register.contentType);
    res.end(client.register.metrics());
  } else {
    res.end("DevOps Demo App Running");
  }
}).listen(3000);
