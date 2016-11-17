angular.module('Social')
	.controller('NavigationController',function($scope, $rootScope, $state, $http){
		if(localStorage['User-Data']){
			$rootScope.loggedIn = true;
		} else {
			$rootScope.loggedIn = false;
		}
		$scope.loginUser = function (){
			$http.post('api/user/login', $scope.login).success(function(data){
				console.log(data);
				localStorage.setItem('User-Data', JSON.stringify(data));
				$scope.login.username = "";
				$scope.login.password = "";
				$rootScope.loggedIn = true;
				$state.go('feed');
			}).error(function(error){
				console.error(error);
			});
		}
		$scope.logoutUser = function(){
			localStorage.removeItem('User-Data');
			$rootScope.loggedIn = false;
			$state.go('home');
		}
	});