let connect = function(){
  if (global.connection){
    return global.connection.connect();
  }

  const { Pool } = require("pg");
  const pool = new Pool({
    connectionString: "postgres://wsqgdvbz:O7ZBzknOMInZGF77s6t0zqZ_BkvCE1XB@motty.db.elephantsql.com/wsqgdvbz"
  });

  global.connection = pool
  return pool.connect();
}

module.exports = { connect }