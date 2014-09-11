var retningslinjeServices = angular.module('retningslinjeServices', ['ngResource']);

retningslinjeServices.factory('Retningslinje', ['$resource',
	function($resource){
		return $resource('http://hdirapi.azurewebsites.net/api/v1/guidelines/:id/', {}, {
			query: {method:'GET', isArray:true}
	});
}]);