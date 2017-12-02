var mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'us-cdbr-iron-east-05.cleardb.net',
  user: 'ba8c6efcf34d52',
  password: '23eda3ad',
  database: 'heroku_d087506ec02ec33'
});

var email= "jack.spicer@colorado.edu";
var password = "cccccc";


connection.query('SELECT * FROM user_info WHERE username = "' + email + '";', function (err, rows, fields) {
    if (err) throw err;
      if(rows.length >0){
        if(rows[0].password == password){
          //res.send('Your Email "' + email + '"' + '\n' + 'Your Password "' + password + '". Succesful Login');

          
          res.redirect('/home');
        }
        else{
          res.send("Email and password does not match");
        }
      }
      else{
        res.send("Email does not exist");
      }
  });