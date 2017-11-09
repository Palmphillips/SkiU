const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'capita706560',
  database: 'skiu'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

connection.query('SELECT * FROM user_info', (err,rows) => {
  if(err) throw err;

  console.log('Data received from Db:\n');
  console.log(rows);


rows.forEach( (row) => { 
  console.log(`${row.name} is in ${row.location}`); 
});

});
