var retningslinjeApp = angular.module('retningslinjeApp', [
	'ngRoute', 'retningslinjeControllers', 'ngResource']);

retningslinjeApp.config(['$routeProvider', '$locationProvider', 
	function($routeProvider,$locationProvider){
		$routeProvider.when('/', {
			templateUrl: 'partials/guidelines_frontpage.html',
			controller: 'retningslinjeListCtrl'
		}).
		when('/:guidelineId', {
			templateUrl: 'partials/guideline_frontpage.html',
			controller: 'retningslinjeSectionCtrl'
		}).
		when('/:guidelineId/section/:sectionId', {
			templateUrl: 'partials/guideline_recommendations.html',
			controller: 'retningslinjeRecommendationCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
		 $locationProvider.html5Mode(true);
	}]);

