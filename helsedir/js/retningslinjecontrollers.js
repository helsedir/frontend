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
		console.log($scope);
		}
]);

retningslinjeControllers.controller('retningslinjeRecommendationCtrl', 
	['$scope', '$routeParams', 'Retningslinje',
	function ($scope, $routeParams, Retningslinje){
		$scope.retningslinje = Retningslinje.get({id:$routeParams.guidelineId}, 
			function (retningslinje){
				$scope.section = retningslinje.sections[$routeParams.sectionId-1];
			}
		);
		}
]);


