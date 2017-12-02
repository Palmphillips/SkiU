const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'us-cdbr-iron-east-05.cleardb.net',
  user: 'ba8c6efcf34d52',
  password: '23eda3ad',
  database: 'heroku_d087506ec02ec33'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

/*
connection.query('SELECT * FROM user_info', (err,rows) => {
  if(err) throw err;

  console.log('Data received from Db:\n');
  console.log(rows);


rows.forEach( (row) => { 
  console.log(`${row.name} is in ${row.location}`); 
});

});
*/

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

/*
app.post('/register', function(req, res) {
  res.send('Your Email "' + req.body.email + '"' + '\n' + 'Your Password "' + req.body.password + '"' + 'Your Password confirmation "' + req.body.password_confirm + '"' );
});
*/

app.post('/register', function(req, res) {
	connection.query("INSERT INTO user_info VALUES ('" + req.body.email + "', 'first', 'last', 'pass', '7', '2011')",
		function (err, result) {
			if (err) throw err;
			res.send('User added to DB')
		});
	});

		


app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});
