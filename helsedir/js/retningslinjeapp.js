var retningslinjeApp = angular.module('retningslinjeApp', [
	'ngRoute', 'retningslinjeControllers', 'retningslinjeServices']);

retningslinjeApp.config(['$routeProvider', '$locationProvider', 
	function($routeProvider,$locationProvider){
		$routeProvider.when('/', {
			templateUrl: 'partials/retningslinje-list.html',
			controller: 'retningslinjeListCtrl'
		}).
		when('/:guidelineId', {
			templateUrl: 'partials/retningslinje-sections.html',
			controller: 'retningslinjeSectionCtrl'
		}).
		when('/:guidelineId/section/:sectionId', {
			templateUrl: 'partials/retningslinje-recommendations.html',
			controller: 'retningslinjeRecommendationCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
		 $locationProvider.html5Mode(true);
	}]);

