angular.module('Social')
	.controller('SignUpController',function($scope, $rootScope, $state, $http){
		$scope.createUser = function () {
			$http.post('api/user/signup', $scope.newUser).success(function(data){
				localStorage.setItem('User-Data', JSON.stringify(data));
				$rootScope.loggedIn = true;
				$scope.newUser.username = "";
				$scope.newUser.password = "";
				$state.go('feed');
			}).error(function(error) {
				console.error(error);
			});
		}
	})