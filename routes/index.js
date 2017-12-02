var express = require('express');
var router = express.Router();
var path = require('path');
var mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'us-cdbr-iron-east-05.cleardb.net',
  user: 'ba8c6efcf34d52',
  password: '23eda3ad',
  database: 'heroku_d087506ec02ec33'
});

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
