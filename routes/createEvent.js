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
//   // connection.connect();
//   //
//   // connection.query('SELECT * FROM events', function (err, rows, fields) {
//   //   if (err) throw err
//   //
//   //   console.log(rows[0].username);
//   //
//   // //  res.render('index', { title: 'SkiU', rows: rows });
//   // });
//   //
//   //
//   //connection.connect();



	connection.query("INSERT INTO events VALUES ('" + "placeholder" + "', '" + req.body.location + "', '" + req.body.departure + "', '" + req.body.date + "', '" + req.body.description + "', '" + req.body.passengers + "')", function (err, result) {
		if (err) throw err;


		res.redirect('home');
	});
  connection.end();

});

module.exports = router;
