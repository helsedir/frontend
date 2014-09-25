var retningslinjeApp = angular.module('retningslinjeApp', [
	'ngRoute', 'retningslinjeControllers', 'ngResource', 'ui.router']);

retningslinjeApp.config(['$routeProvider', '$locationProvider', '$urlRouterProvider', '$stateProvider', 
	function($routeProvider,$locationProvider, $urlRouterProvider, $stateProvider){
		$urlRouterProvider.otherwise("/");
		$stateProvider
		   .state('guidelines', {
		     url: "/",
		     templateUrl: "partials/guidelines_frontpage.html",
		     controller: 'guidelinesListCtrl'
		   });
		$stateProvider
		   .state('guidelines.detail', {
		     url: "/",
		     templateUrl: "partials/guideline_frontpage.html"
		   });
		$stateProvider
		    .state('recommendation', {
		     url: "/recommendations",
		     templateUrl: "partials/guideline_recommendations.html"
		   });
		
		 $locationProvider.html5Mode(true);
	}]);

