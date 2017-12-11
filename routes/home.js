var express = require('express');
var router = express.Router();

var connection_info = {
  host: 'us-cdbr-iron-east-05.cleardb.net',
  user: 'ba8c6efcf34d52',
  password: '23eda3ad',
  database: 'heroku_d087506ec02ec33'
}

var connection;

router.get('/', function(req, res, next) {
  //res.send("Your email: " + req.session.email);

  if (!req.session.loggedIn){
    console.log("User not logged in. Redirecting to SkiU page.");
    // res.render("SkiU");
    res.redirect("/");
  }

  connection = mysql.createConnection(connection_info);

  //handle disconnect
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

router.get('/logout',function(req,res){
  req.session.destroy(function(err) {
    if(err) {
      console.log(err);
    } else {
      res.render('/');
    }
  });
});


module.exports = router;
