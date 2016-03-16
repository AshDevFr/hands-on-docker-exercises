(function() {
  'use strict';

  const http = require('http'),
        port = process.env.PORT || 9000;

  http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.end('Hello World\nPart4: Exercise2');
  }).listen(port);

  console.log('Server running at http://127.0.0.1:' + port + '/');
})();