angular.module('Social')
	.controller('UserController',function($scope, $rootScope, $state, $stateParams, $http){
		$scope.id = $stateParams.id;
	});