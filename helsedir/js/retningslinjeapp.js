var retningslinjeApp = angular.module('retningslinjeApp', [
	'ngRoute', 'retningslinjeControllers', 'ngResource', 'ui.router']);

retningslinjeApp.config(['$routeProvider', '$locationProvider', '$urlRouterProvider', '$stateProvider', 
	function($routeProvider,$locationProvider, $urlRouterProvider, $stateProvider){
		$stateProvider
		   .state('sections', {
		     url: "/state1",
		     templateUrl: "partials/sections.html"
		   });
		$routeProvider.when('/', {
			templateUrl: 'partials/guidelines_frontpage.html',
			controller: 'guidelinesListCtrl'
		}).
		when('/:guidelineId', {
			templateUrl: 'partials/guideline_frontpage.html',
			controller: 'guidelineSectionCtrl'
		}).
		when('/:guidelineId/section/:sectionId', {
			templateUrl: 'partials/guideline_recommendations.html',
			controller: 'guidelineRecommendationCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
		 $locationProvider.html5Mode(true);
	}]);

