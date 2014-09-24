var retningslinjeControllers = angular.module('retningslinjeControllers', ['angularLoad']);

retningslinjeControllers.controller('retningslinjeListCtrl', ['$scope', 'Guideline', 'angularLoad', 
    function($scope, Guideline, angularLoad) {
        $scope.retningslinjer = Guideline.query();
        angularLoad.loadCSS("../css/guidelines_frontpage.css");
    }
]);

retningslinjeControllers.controller('retningslinjeSectionCtrl', ['$scope', '$routeParams', 'Guideline', 'angularLoad', '$rootScope',
    function($scope, $routeParams, Guideline, angularLoad, $rootScope) {
        $scope.retningslinje = Guideline.get({
            id: $routeParams.guidelineId
        });
        angularLoad.loadCSS("../css/guideline_frontpage.css");
        $rootScope.guideline = $scope.retningslinje;
    }
]);

retningslinjeControllers.controller('retningslinjeRecommendationCtrl', ['$scope', '$routeParams', 'Section', 'angularLoad', '$rootScope',
    function($scope, $routeParams, Section, angularLoad, $rootScope) {
        $scope.section = Section.get({
                id: $routeParams.guidelineId
            });
        $scope.guidelineTitle = $rootScope.guideline;
        angularLoad.loadCSS("../css/guideline_recommendations.css");
    }
])
    .directive('grading', function() {

        function link(scope, element, attrs) {
            scope.$watch(attrs.grading, function(value) {

                    if (attrs.grading == "strong")
                        element.addClass("gradingStrong");
                    else if (attrs.grading == "weak")
                        element.addClass("gradingWeak");
                    else
                        element.addClass("gradingNone");
                }

            );
        }

        return {
            restrict: 'A',
            link: link
        };

    });