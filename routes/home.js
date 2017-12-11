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
  // Setup session variable
  var sess = req.session;

  console.log("Home");

  // Check if user is logged in. If not, redirect to SkiU page
  if (!sess.loggedIn){
    console.log("User not logged in. Redirecting to SkiU page.");
    res.redirect("/");
  }

  // Get information about user
  var email = sess.email;
  var first_name = sess.first_name;
  var last_name = sess.last_name;
  var my_events = {};
  var events = {};

  // // Start MySQL connection
  // connection = mysql.createConnection(connection_info);
  // // Handle disconnection from server
  // connection.on('error', function(err) {
  //   // console.log('db error', err);
  //   if(err.code === 'PROTOCOL_CONNECTION_LOST') {
  //     connection.connect(function(err) {              // The server is either down
  //       if(err) {                                     // or restarting (takes a while sometimes).
  //         // console.log('error when connecting to db:', err);
  //         setTimeout(function(){}, 2000); // We introduce a delay before attempting to reconnect,
  //       }                                     // to avoid a hot loop, and to allow our node script to
  //     });
  //   } else {
  //     throw err;
  //   }
  // });
  //
  // // Get information about events
  // connection.query('SELECT * FROM user_info WHERE username = "' + email + '";', function (err, myEventRows, fields) {
  // if (err) throw err;
  //    if(myEventRows.length>0){
  //
  //    }
  //    else{
  //
  //    }
  // });
  // connection.query('SELECT * FROM events;', function (err, eventRows, fields) {
  //   if (err) throw err;
  //     if(eventRows.length>0){
  //       // if (email == req.session.email) {
  //       //   res.send('this event is yours');
  //       // }
  //       // else {
  //       //   res.send('this event is somebody elses')
  //       //
  //       // }
  //
  //     }
  //     else{
  //       // send error
  //       res.render('error', {
  //         description: "Unable to connect to servers at the time. Please try again later."
  //       });
  //     }
  // });

  // Render home page
  res.render("home", {
    username: email,
    first_name: first_name,
    last_name: last_name,
    my_events: my_events,
    events: events
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
