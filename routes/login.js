var express = require('express');
var router = express.Router();

var mysql = require('mysql');
const bcrypt = require('bcrypt');

var connection_info = {
  host: 'tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'o7g1pc8gw1nmeehm',
  password: 'gbgqf33r8bj4bqzj',
  database: 'qpb8oulw3o6oklee'
};

var connection;

router.post('/', function(req, res) {
  var email= req.body.email.toString();
  var password = req.body.pwd;

  console.log("logging in");

  connection = mysql.createConnection(connection_info);

  console.log("connection made");


  // Tests inputs using Regular Expressions
  // var emailRe = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  // var coloradoEmailRe = /.*/;
  // if(!emailRe.test(req.body.email) && !coloradoEmailRe.test(req.body.email)){
  //   window.alert('Please enter in a valid colorado.edu email address.');
  // }
  // var passwordRe = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
  // if(!passwordRe.test(req.body.password)){
  //   window.alert('Please enter in a valid password.');
  // }


  // Checks for user in database
  connection.query('SELECT * FROM user_info WHERE username = "' + email + '";', function (err, rows, fields) {
    if (err) throw err;
      if(rows.length >0){
        bcrypt.compare(password, rows[0].password, function(err, hashRes) {
          if(hashRes) {
           // Passwords match
           //res.send('Your Email "' + email + '"' + '\n' + 'Your Password "' + password + '". Succesful Login');

           // Assigning session variables to indicate that user is logged in
           var sess = req.session;
           sess.loggedIn = true;
           sess.email=email;
           sess.first_name=rows[0].first_name;
           sess.last_name=rows[0].last_name;

           res.redirect('/home');
          } else {
           // Passwords don't match
           res.send("Email and password does not match");
          }
        });
      }
      else{
        res.send("Email does not exist");
      }
  });

});


module.exports = router;
