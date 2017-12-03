var express = require('express');
var router = express.Router();

var mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'us-cdbr-iron-east-05.cleardb.net',
  user: 'ba8c6efcf34d52',
  password: '23eda3ad',
  database: 'heroku_d087506ec02ec33'
});

router.get('/', function(req, res, next) {
  res.render('createEvent');
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



	// connection.query("INSERT INTO user_info VALUES ('" + req.body.email + "', '" + req.body.password + "', '" + req.body.fname + "', '" + req.body.lname + "', '" + req.body.phone + "', '" + req.body.year + "')", function (err, result) {
	// 	if (err) throw err;

 //    // Assigning session variables to indicate that user is logged in
 //    var sess = req.session;
 //    sess.loggedIn = true;
 //    sess.email=req.body.email;
 //    sess.first_name=req.body.fname;
 //    sess.last_name=req.body.lname;

	// 	res.redirect('home');
	// });
  //connection.end();
});

module.exports = router;
