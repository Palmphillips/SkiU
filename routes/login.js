var express = require('express');
var router = express.Router();

var mysql = require('mysql');
const bcrypt = require('bcrypt');

var connection_info = {
  host: 'us-cdbr-iron-east-05.cleardb.net',
  user: 'ba8c6efcf34d52',
  password: '23eda3ad',
  database: 'heroku_d087506ec02ec33'
}

var connection;

router.post('/', function(req, res) {
  var email= req.body.email.toString();
  var password = req.body.pwd;

  connection = mysql.createConnection(connection_info);

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
        console.log(rows[0].password);
        console.log(rows[0].first_name);
        console.log(password);
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

  // handle disconnect
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
      connection.connect(function(err) {              // The server is either down
        if(err) {                                     // or restarting (takes a while sometimes).
          console.log('error when connecting to db:', err);
          setTimeout(function(){}, 2000); // We introduce a delay before attempting to reconnect,
        }                                     // to avoid a hot loop, and to allow our node script to
      });
    } else {
      throw err;
    }
  });

});


module.exports = router;
