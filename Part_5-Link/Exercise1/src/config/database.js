'use strict';

module.exports = function() {
  const db_address = process.env.DB_PORT_27017_TCP_ADDR || 'localhost',
        db_port    = process.env.DB_PORT_27017_TCP_PORT || 27017;
  return 'mongodb://' + db_address + ':' + db_port + '/handsOnDocker';
};