'use strict';

// Declare app level module which depends on views, and components
angular.module('vcard-app', [
  'ui.router',
  
])
.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: '../app/views/partials/home.html',
            controller:'accountDetails'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('QR', {
        	url: '/QR',
            templateUrl: '../app/views/partials/shareqr.html',
            controller:'generateQR'     
        })
    .state('AddPayee', {
    	url: '/AddPayee',
        templateUrl: '../app/views/partials/AddPayee.html',
        controller:'AddPayee'     
    });
        
});