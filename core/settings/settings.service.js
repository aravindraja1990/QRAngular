angular.module('cpApp.settings').
service('settings', ['$http', function($http){
		this.list = {};
		var that = this;
		this.cached = function(){
			 $http.get('./data/list.json').success(function(list){
				if(Object.keys(list).length > 0) {
					return  that.list;
				}else{
					that.list = list;
					return list;
				}
				
			});
		};
		this.retreive =  function(){
			return  $http.get('./data/list.json');
		};
}]);