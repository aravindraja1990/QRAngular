'use strict';
angular.module('cpApp.register', []);
angular.module('cpApp.register',['cpApp.settings']).component('registerView',{
	 templateUrl: 'components/register/register.template.html',
	 bindings:{
		 "list":"@"
	 },
	 controller: ['settings','$location', function registerController(settings, $location){
		 var self = this;
		 self.init = function(){
			 
		 },
		 self.validateAcnt=function(){
			 settings.validateAcnt().success(function(list){
				 alert(list.message);
				
			 });
			 settings.validateAcnt().error(function(list){
				 alert(list);
				
			 });
		 }
	 }]
});