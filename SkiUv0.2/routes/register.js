var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : '',
  password : '',
  database : ''
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

  // Tests inputs using Regular Expressions
  var emailRe = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
  if(!emailRe.test(req.body.email)){
    window.alert('Please enter in a valid colorado.edu email address.');
  }
  var passwordRe = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
  if(!passwordRe.test(req.body.password)){
    window.alert('Please enter in a valid colorado.edu email address.');
  }
  var fnameRe = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
  if(!fnameRe.test(req.body.fname)){
    window.alert('Please enter in a valid colorado.edu email address.');
  }
  var lnameRe = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
  if(!lnameRe.test(req.body.lname)){
    window.alert('Please enter in a valid colorado.edu email address.');
  }
  var phoneRe = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
  if(!phoneRe.test(req.body.phone)){
    window.alert('Please enter in a valid colorado.edu email address.');
  }
  var yearRe = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
  if(!yearRe.test(req.body.year)){
    window.alert('Please enter in a valid colorado.edu email address.');
  }


	connection.query("INSERT INTO user_info VALUES ('" + req.body.email + "', '" + req.body.password + "', '" + req.body.fname + "', '" + req.body.lname + "', '" + req.body.phone + "', '" + req.body.year + "')", function (err, result) {
		if (err) throw err;
		res.redirect('home');
	});
  //connection.end();
});

module.exports = router;
