const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'poc'
});

connection.connect(function(err){
  if(err) return console.log(err);
  console.log('conectou!');
});

module.exports = connection;
