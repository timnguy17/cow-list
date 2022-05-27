const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'cows'
});


// Your Database Queries Here!!

const queryCowList = (callback) => {
  connection.query('SELECT * FROM cowList', callback)
};



// Don't forget to export your functions!
module.exports = {queryCowList};
