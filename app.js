const http = require('http');
http.createServer((req,res)=>{
  res.end("DevOps Demo App Running");
}).listen(3000);
