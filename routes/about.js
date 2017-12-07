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
  res.render('about');
});

module.exports = router;
