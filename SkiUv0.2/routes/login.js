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
        if(rows[0].password == password){
          res.send('Your Email "' + email + '"' + '\n' + 'Your Password "' + password + '". Succesful Login');
          //In this we are assigning email to sess.email variable.
          var sess = req.session;
          sess.email=email;
          sess.first_name=rows[0].first_name;
          sess.last_name=rows[0].last_name;
          res.redirect('home');
        }
        else{
          res.send("Email and password does not match");
        }
      }
      else{
        res.send("Email does not exist");
      }
  });

});

module.exports = router;
