var retningslinjeApp = angular.module('retningslinjeApp', [
	'ngRoute', 'retningslinjeControllers', 'retningslinjeServices']);

retningslinjeApp.config(['$routeProvider', 
	function($routeProvider){
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
	}]);

