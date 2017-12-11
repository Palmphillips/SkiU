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
  var events = {
    "Arapahoe Basin": {
      3: {
        username: "pls",
        departure: "69am",
        date: "date69",
        description: "blah blah"
      },
      5: {
        username: "pls",
        departure: "69am",
        date: "date69",
        description: "blah blah"
      }
    },
    "Aspen": {
    },
    "Beaver Creek": {
    },
    "Breckenridge": {
    },
    "Copper Mountain": {
    },
    "Eldora": {
    },
    "Keystone": {
    },
    "Loveland": {
    },
    "Steamboat": {
    },
    "Vail": {
      5: {
        username: "pls",
        departure: "69am",
        date: "date69",
        description: "blah blah"
      }
    }
  };

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
  // var myEventArray = [];
  //
  // // Get information about user
  // connection.query('SELECT * FROM user_info WHERE username = "' + email + '";', function (err, userRows, fields) {
  //    if (err) throw err;
  //      if(userRows.length>0){
  //        // Check if user has any events
  //        if(userRows[0].events != NULL) {
  //          // Place all events in a dictionary
  //          // Will get information about events later
  //          myEventArray = userRows[0].events.split(", ");
  //          myEventArray.pop();
  //        }
  //      }
  //      else{
  //
  //    }
  // });
  // connection.query('SELECT * FROM events;', function (err, eventRows, fields) {
  //   if (err) throw err;
  //     if(eventRows.length>0){
  //       for (var i=0; i<eventRows.length; i++){
  //         // When user is a passenger (from before)
  //         var passenger = false;
  //         for (var j=0; j<myEventArray.length; j++){
  //           if (eventRows[i].id == myEventArray[j]){
  //             my_events["passenger"][eventRows[i].id] = {
  //               // Populate stuff here
  //             };
  //             passenger = true;
  //             break;
  //           }
  //         }
  //         // When user is a driver (they created the event)
  //         var driver = false;
  //         if (eventRows[i].username == email){
  //           my_events["driver"][eventRows[i].id] = {
  //             // Populate stuff here
  //           };
  //           driver = true;
  //         }
  //         // Otherwise place event in events list
  //         if (passenger == false && driver == false){
  //           if (eventRows[i].location in events){
  //             events[eventRows[i].location][eventRows[i].id] = {
  //               // Populate stuff here
  //             };
  //           }
  //         }
  //       }
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
