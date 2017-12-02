var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Sou91599!!',
  database : 'SkiU'
});

// edit links so that user must go to skiu.com/event?id=blah

router.get('/', function(req, res, next) {
  res.send('event page is broken');
  // eventID = req.query.id;
  //
  // connection.query('SELECT * FROM events WHERE id = "' + eventID + '";', function (err, rows, fields) {
  //   if (err) throw err;
  //     if(rows.length>0){
  //       var driver = getUserInfo(rows[0].username);
  //       console.log(driver.username);
  //       // if (email == req.session.email) {
  //       //   res.send('this event is yours');
  //       // }
  //       // else {
  //       //   res.send('this event is somebody elses')
  //       //
  //       // }
  //       //res.send(driver.username);
  //       // res.render("event", {
  //       //   driver_first_name: driver.first_name,
  //       //   driver_last_name: driver.last_name,
  //       //   driver_username: driver.username,
  //       //   driver_phone: driver.phone,
  //       //   location: rows[0].username,
  //       //   departure: rows[0].departure,
  //       //   arrival: rows[0].arrival,
  //       //   description: rows[0].description,
  //       //   passengers: ["passenger1", "passenger2"]
  //       // });
  //       res.send(driver.username);
  //     }
  //     else{
  //       //send 404 error
  //       res.render('error');
  //     }
  // });
});


// function getUserInfo(email) {
//   // var user = {
//   //   username: "boi",
//   //   first_name: "boi",
//   //   last_name: "",
//   //   phone: "",
//   //   school_year: ""
//   // };
//   // console.log(user.username);
//   // return user;
//   connection.query('SELECT * FROM user_info WHERE username = "' + email + '";', function (err, rows, fields) {
//     if (err) throw err;
//       if(rows.length>0){
//         var user = {
//           username: email,
//           first_name: rows[0].first_name,
//           last_name: "",
//           phone: "",
//           school_year: ""
//         };
//         console.log(user.username);
//         return user;
//         // user.username = email;
//         // user.first_name = rows[0].first_name;
//         // user.last_name = rows[0].last_name;
//         // user.phone = rows[0].phone;
//         // user.school_year = rows[0].school_year;
//       }
//       else{
//
//       }
//   });
//   return "";
// }


module.exports = router;
