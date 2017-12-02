var express = require('express');
var router = express.Router();
var path = require('path');
// var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'Sou91599!!',
//   database : 'SkiU'
// });

/* GET home page. */
router.get('/', function(req, res, next) {

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
  // connection.end();
  //
  // // /res.send(rows[0].username);
  //
  // // res.send(path.basename(path.dirname(filename)));

  var sess = req.session;
  if(sess.email) {

      res.redirect('home');
  }
  else {
      res.render('SkiU');
  }

  //res.render('SkiU');
});

module.exports = router;
