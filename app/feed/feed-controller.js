angular.module('Social')
	.controller('FeedController',function($scope, $rootScope, $state, $http){
		$scope.posts = [];
		$http.get('api/feed').success(function(data){
			$scope.posts = data;
		}).error(function(error){
			console.error(error);
		});
		$scope.makePost = function() {
			var user = JSON.parse(localStorage.getItem('User-Data'));
			var post = { user: user.username,
						user_id: user._id,
						text: $scope.newPost.text,
						created_on: new Date()};
			$http.post('api/feed', post).success(function(data){
				$scope.posts.push(post);
			}).error(function(error){
				console.error(error);
			});
		}
	});