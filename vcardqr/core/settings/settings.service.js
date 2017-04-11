angular.module("vcard-app").
service('settings', ['$http', function($http){
	var acntDetails="";
		this.cached = function(){
			 $http.get('./data/list.json').success(function(list){
				return list;
			});
		};
		this.retreive =  function(){
			return  $http.get('./data/list.json');
		};
		this.validateAcnt =  function(){
			return  $http.get('./data/validateAcnt.json');
		};
		this.retreiveAccountDetails =  function(){
			
			this.acntDetails=  $http.get('./data/accountDetails.json');
			return this.acntDetails;
		};
}]);
