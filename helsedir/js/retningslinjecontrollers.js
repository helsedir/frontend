var retningslinjeControllers = angular.module('retningslinjeControllers', []);

retningslinjeControllers.controller('retningslinjeListCtrl', 
	['$scope', 'Retningslinje',  
	function ($scope, Retningslinje){
		$scope.retningslinjer = Retningslinje.query();		
}]);

retningslinjeControllers.controller('retningslinjeSectionCtrl', 
	['$scope', '$routeParams', 'Retningslinje', 
	function ($scope, $routeParams, Retningslinje){
		$scope.retningslinje = Retningslinje.get({id:$routeParams.guidelineId});
		}
]);

retningslinjeControllers.controller('retningslinjeRecommendationCtrl', 
	['$scope', '$routeParams', 
	function ($scope, $routeParams){
		$scope.recommendationId = $routeParams.recommendationId;
		}
]);


