var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Sou91599!!',
  database : 'SkiU'
});

router.get('/', function(req, res, next) {
  res.render('registration');
});

router.post('/', function(req, res) {
  // connection.connect();
  //
  // connection.query('SELECT * FROM events', function (err, rows, fields) {
  //   if (err) throw err
  //
  //   console.log(rows[0].username);
  //
  // //  res.render('index', { title: 'SkiU', rows: rows });
  // });
  //
  //
  //connection.connect();
	connection.query("INSERT INTO user_info VALUES ('" + req.body.email + "', '" + req.body.password + "', '" + req.body.fname + "', '" + req.body.lname + "', '" + req.body.phone + "', '" + req.body.year + "')", function (err, result) {
		if (err) throw err;
		res.redirect('home');
	});
  //connection.end();
});

module.exports = router;
