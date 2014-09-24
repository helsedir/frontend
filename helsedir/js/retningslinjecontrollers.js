var retningslinjeControllers = angular.module('retningslinjeControllers', ['angularLoad']);

retningslinjeControllers.controller('guidelinesListCtrl', ['$scope', 'Guideline', 'angularLoad', 
    function($scope, Guideline, angularLoad) {
        $scope.guidelines = Guideline.query();
        angularLoad.loadCSS("../css/guidelines_frontpage.css");
    }
]);

retningslinjeControllers.controller('guidelineSectionCtrl', ['$scope', '$routeParams', 'Guideline', 'angularLoad', '$stateParams',
    function($scope, $routeParams, Guideline, angularLoad, $stateParams) {
        $scope.retningslinje = Guideline.get({
            id: $stateParams.guidelineId
        });
        angularLoad.loadCSS("../css/guideline_frontpage.css");
    }
]);

retningslinjeControllers.controller('guidelineRecommendationCtrl', ['$scope', '$routeParams', 'Section', 'angularLoad', '$stateParams' ,
    function($scope, $routeParams, Section, angularLoad, $stateParams) {
        $scope.section = Section.get({
                id: $stateParams.sectionId
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