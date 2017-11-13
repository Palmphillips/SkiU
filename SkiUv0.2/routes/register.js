var express = require('express');
var router = express.Router();

app.post('/', function(req, res) {
	connection.query("INSERT INTO user_info VALUES ('" + req.body.email + "', 'first', 'last', 'pass', '7', '2011')",
		function (err, result) {
			if (err) throw err;
			res.send('User added to DB');
		});
	});

module.exports = router;
