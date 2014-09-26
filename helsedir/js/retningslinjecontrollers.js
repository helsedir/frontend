var retningslinjeControllers = angular.module('retningslinjeControllers', ['angularLoad']);

retningslinjeControllers.controller('guidelinesListCtrl', ['$scope', 'Guideline', 'angularLoad', 
    function($scope, Guideline, angularLoad) {
        $scope.guidelines = Guideline.query();
        
    }
]);

retningslinjeControllers.controller('guidelineSectionCtrl', ['$scope', '$routeParams', 'Guideline', 'angularLoad',
    function($scope, $routeParams, Guideline, angularLoad, $rootScope) {
        $scope.retningslinje = Guideline.get({
            id: $routeParams.guidelineId
        });
        angularLoad.loadCSS("../css/guideline_frontpage.css");
    }
]);

retningslinjeControllers.controller('searchCtrl', ['$scope', '$routeParams', 'Guideline', 'angularLoad',
    function($scope, $routeParams, Guideline, angularLoad, $rootScope) {
        angularLoad.loadCSS("../css/guidelines_search.css");
    }
]);

retningslinjeControllers.controller('guidelineRecommendationCtrl', ['$scope', '$routeParams', 'Section', 'angularLoad',
    function($scope, $routeParams, Section, angularLoad, $rootScope) {
        $scope.section = Section.get({
                id: $routeParams.sectionId
            });
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