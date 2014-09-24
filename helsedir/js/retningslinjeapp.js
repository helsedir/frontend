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
		   .state('guideline', {
		     url: "/:guidelineId",
		     templateUrl: "partials/guideline_frontpage.html",
		     controller: 'guidelineSectionCtrl'
		   });
		$stateProvider
		    .state('guideline.section', {
		     url: "",
		     templateUrl: "partials/guideline_sections.html",
		     controller: 'guidelineRecommendationCtrl'
		   });
		
		 $locationProvider.html5Mode(true);
	}]);

