var app = angular.module("vcard-app");
app.controller("accountDetails", function($scope,settings) {
	$scope.init=function() {
		settings.retreiveAccountDetails().success(function(list){
			$scope.listfield=list;
			console.log($scope.listfield);
		});
	}
	$scope.validateUser = function() {
       console.log("testing");
	}
});