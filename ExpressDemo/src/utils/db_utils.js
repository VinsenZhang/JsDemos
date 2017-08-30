import mysql from 'mysql';
const pool = mysql.createPool({
  connectionLimit: 20,
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Vinsen1991',
  database: 'test'
});


let db = {};


db.query = function(sql){
  return new Promise(function (resovle, reject) {
      pool.getConnection(function (err, connection) {
          if (err) {
            reject(err)
          } else {
            connection.query(sql, function (error, results, fields) {
                if (error) {
                  reject(error)
                } else {
                  resovle(results);
                }
              }
            )
          }
          connection.release();
        }
      )
    }
  );
};


module.exports = db;




