var mongoose =  require('mongoose');
module.exports = mongoose.model('Post', {
	user: String,
	user_id: String,
	text: String,
	created_on: String
});