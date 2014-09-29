var retningslinjeControllers = angular.module('retningslinjeControllers', ['angularLoad']);

retningslinjeControllers.controller('guidelinesListCtrl', ['$scope', 'Guideline', 'angularLoad',  
    function($scope, Guideline, angularLoad) {
        $scope.guidelines = Guideline.query();

    }
]);

retningslinjeControllers.controller('guidelineSectionCtrl', ['$scope', '$routeParams', 'Guideline', 'angularLoad', 
    function($scope, $routeParams, Guideline, angularLoad) {
        $scope.retningslinje = Guideline.get({
            id: $routeParams.guidelineId
        });
    }
]);

retningslinjeControllers.controller('searchCtrl', ['$scope', '$routeParams', 'Guideline', 'angularLoad', 
    function($scope, $routeParams, Guideline, angularLoad) {
        angularLoad.loadCSS("../css/guidelines_search.css");
    }
]);

retningslinjeControllers.controller('guidelineRecommendationCtrl', ['$scope', '$routeParams', 'Section', 'Guideline', 'angularLoad', 
    function($scope, $routeParams, Section, Guideline, angularLoad) {
        $scope.section = Section.get({
                id: $routeParams.sectionId
            });
        $scope.guideline = Guideline.get({
            id: $routeParams.guidelineId
        });
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