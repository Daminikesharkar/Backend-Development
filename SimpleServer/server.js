const http = require('http');

const server = http.createServer((req, res) => {  
  res.setHeader('Content-Type', 'text/plain');
  res.end('Damini'); 

  console.log('Server accessed');
});

const port = 4000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
