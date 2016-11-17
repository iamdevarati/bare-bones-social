var mongoose = require('mongoose');
var Post = require('../datasets/posts');

module.exports.getFeed =  function (req, res) {
	Post.find({}, function(err, result){
		if(err){
				console.log("Error getting feed");
			}
			if(result){
				console.log(JSON.stringify(result));
				res.json(result);
			}
	});
}

module.exports.postFeed =  function (req, res) {
	var post = new Post(req.body);
	post.save();
	res.json(post);
}