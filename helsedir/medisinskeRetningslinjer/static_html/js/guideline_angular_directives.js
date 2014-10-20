angular.module('retningslinjeApp')
	.directive('recommendation', function(){
		return {
			templateUrl: 'partials/guideline_recommendations_single.html',
			restrict: 'E',
			replace: 'true',
			link: function (scope, element, attrs){

			}
		}
	})

	.directive('aboutSection', function(){
		return{
			templateUrl: 'partials/_aboutsection.html',
			restrict: 'E',
			replace: 'true',
			link: function (scope, element, attrs){

			}
		}
	});