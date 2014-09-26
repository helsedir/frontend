var retningslinjeApp = angular.module('retningslinjeApp', [
	'ngRoute', 'retningslinjeControllers', 'ngResource']);

retningslinjeApp.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider){
		$routeProvider.when('/', {
			templateUrl: 'partials/guidelines_frontpage.html',
			controller: 'guidelinesListCtrl'
		}).
		when('/search', {
			templateUrl: 'partials/guidelines_search.html',
			controller: 'searchCtrl'
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

