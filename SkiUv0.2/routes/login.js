var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Sou91599!!',
  database : 'SkiU'
});

router.post('/', function(req, res) {
  var email= req.body.email.toString();
  var password = req.body.pwd;

  res.send('Your Email "' + email + '"' + '\n' + 'Your Password "' + password + '"');

  // connection.query('SELECT * FROM user_info WHERE username = ' + email, function (err, rows, fields) {
  //   if (err) throw err;
  //     if(rows.length >0){
  //       if(rows[0].password == password){
  //         res.send('Your Email "' + email + '"' + '\n' + 'Your Password "' + password + '"');
  //       }
  //       else{
  //         res.send("Email and password does not match");
  //       }
  //     }
  //     else{
  //       res.send("Email does not exist");
  //     }
  // });

});

module.exports = router;
