var mongoose = require('mongoose');
var User = require('../datasets/users');

module.exports.signup =  function (req, res) {
	var user_init = req.body;
	user_init.connections = [];
	var user = new User(user_init);
	user.save();
	setTimeout(function(){
		User.findOne({'username': req.body.username, 'password': req.body.password}, '_id username', function(err, result){
			if(err){
				console.log("Error loging in");
			}
			if(result){
				res.json({username: req.body.username,
						_id: result._id});
			}
		});
	}, 10);
}

module.exports.login = function(req, res){
	User.findOne({'username': req.body.username, 'password': req.body.password}, '_id username', function(err, result){
		if(err){
			console.log("Error loging in");
		}
		if(result){
			res.json({username: req.body.username,
					_id: result._id});
		}
	});
}