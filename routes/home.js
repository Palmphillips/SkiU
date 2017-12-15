var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var connection_info = {
  host: 'tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'o7g1pc8gw1nmeehm',
  password: 'gbgqf33r8bj4bqzj',
  database: 'qpb8oulw3o6oklee'
};

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
  var my_events = {
    "driver": {

    },
    "passenger": {

    }
  };
  var events = {
  };

  // // Start MySQL connection
  connection = mysql.createConnection(connection_info);

  // Handle disconnection from server
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

  var myEventArray = [];
  var doneCollectingMyEventData = false;
  var doneCollectingData = false;
  connection.query('SELECT * FROM user_info WHERE username = \"' + email + '\";', function (err, userRows, fields) {
     if (err) throw err;
       if(userRows.length>0){
         // Check if user has any events
         if(userRows[0].events) {
           // Place all events in a dictionary
           // Will get information about events later
           myEventArray = userRows[0].events.split(", ");
           myEventArray.pop();
           console.log(myEventArray)
         }
         doneCollectingMyEventData = true;
       }
       else{
     }
  });


  // if (doneCollectingMyEventData == true) {
    connection.query('SELECT * FROM events;', function (err, eventRows, fields) {
      if (err) throw err;
        if(eventRows.length>0){
          // Get information about user's passener events
          for (var i=0; i<eventRows.length; i++){
            // // When user is a passenger (from before)
            var passenger = false;
            for (var j=0; j<myEventArray.length; j++){
              if (eventRows[i].id == myEventArray[j]){
                my_events["passenger"][eventRows[i].id] = {
                  username: eventRows[i].username,
                  departure: eventRows[i].departure,
                  date: eventRows[i].date,
                  description: eventRows[i].description
                };
                passenger = true;
              }
            }
            // // When user is a driver (they created the event)
            var driver = false;
            if (eventRows[i].username == email){
              my_events["driver"][eventRows[i].id] = {
                username: eventRows[i].username,
                departure: eventRows[i].departure,
                date: eventRows[i].date,
                description: eventRows[i].description
              };
              driver = true;
            }
            // Otherwise place event in events list
            if (passenger == false && driver == false){
              if (eventRows[i].location in events){
                events[eventRows[i].location][eventRows[i].id] = {
                  username: eventRows[i].username,
                  departure: eventRows[i].departure,
                  date: eventRows[i].date,
                  description: eventRows[i].description
                };
              }
              else {
                events[eventRows[i].location] = {};
                events[eventRows[i].location][eventRows[i].id] = {
                  username: eventRows[i].username,
                  departure: eventRows[i].departure,
                  date: eventRows[i].date,
                  description: eventRows[i].description
                };
              }
            }
          }
          doneCollectingData = true;
          connection.destroy();
          res.render("home", {
            username: email,
            first_name: first_name,
            last_name: last_name,
            my_events: my_events,
            events: events
          });
        }
        else{
          // send error
          res.render('error', {
            description: "Unable to connect to servers at the time. Please try again later."
          });
        }
    });

  // }


  // Render home page
  // if(doneCollectingData){
  //   res.render("home", {
  //     username: email,
  //     first_name: first_name,
  //     last_name: last_name,
  //     my_events: my_events,
  //     events: events
  //   });
  // }

});

router.get('/logout',function(req,res){
  req.session.destroy(function(err) {
    if(err) {
      console.log(err);
    } else {
      res.redirect('/');
    }
  });
});


module.exports = router;
