var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var connection_info = {
  host: 'tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'o7g1pc8gw1nmeehm',
  password: 'gbgqf33r8bj4bqzj',
  database: 'qpb8oulw3o6oklee'
};

// edit links so that user must go to skiu.com/event?id=blah

router.get('/', function(req, res, next) {
  eventID = req.query.id;

  connection.query('SELECT * FROM events WHERE id = "' + eventID + '";', function (err, eventRows, fields) {
    if (err) throw err;
      if(eventRows.length>0){
        email = eventRows[0].username;
        // if (email == req.session.email) {
        //   res.send('this event is yours');
        // }
        // else {
        //   res.send('this event is somebody elses')
        //
        // }
        connection.query('SELECT * FROM user_info WHERE username = "' + email + '";', function (err, driverRows, fields) {
           if (err) throw err;
             if(driverRows.length>0){
               res.render("event", {
                 driver_username: email,
                 driver_first_name: driverRows[0].first_name,
                 location: eventRows[0].location
               });
             }
             else{

             }
         });
      }
      else{
        //send 404 error
        res.render('error', {
          description: "404 Event not found."
        });
      }
  });
});


module.exports = router;
