const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Hockeygob19!',
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

// Express Forms

var express = require('express');
var bodyParser = require('body-parser');
var app     = express();

app.use(bodyParser.urlencoded({ extended: true })); 

//app.use(express.bodyParser());


// This takes the signin function form on SkiU.html modal login
// This information should be used to handle login
app.post('/signin', function(req, res) {
  res.send('Your Email "' + req.body.email + '"' + '\n' + 'Your Password "' + req.body.pwd + '"');
});

app.post('/register', function(req, res) {
  res.send('Your Email "' + req.body.email + '"' + '\n' + 'Your Password "' + req.body.password + '"' + 'Your Password confirmation "' + req.body.password_confirm + '"' );
});


app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});
