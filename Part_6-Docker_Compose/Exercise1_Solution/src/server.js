(function() {
  'use strict';

  const http        = require('http'),
        port        = process.env.PORT || 9000,
        MongoClient = require('mongodb').MongoClient,
        assert      = require('assert'),
        configDB    = require('./config/database')();

  MongoClient.connect(configDB, (err, db) => {
    assert.equal(null, err);
    console.log("Connected correctly to database.");
    db.close();
  });

  http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.end('Hello World\nPart6: Exercise1 Solution');
  }).listen(port);

  console.log('Server running at http://127.0.0.1:' + port + '/');
})();