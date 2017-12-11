var express = require('express');
var router = express.Router();
var path = require('path');
var mysql = require('mysql');


/* GET home page. */
router.get('/', function(req, res, next) {
  var sess = req.session;
  if(sess.email) {
      res.redirect('home');
  }
  else {
      res.render('SkiU');
  }
});

module.exports = router;
