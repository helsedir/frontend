var retningslinjeControllers = angular.module('retningslinjeControllers', ['angularLoad']);

retningslinjeControllers.controller('retningslinjeListCtrl', ['$scope', 'Retningslinje', 'angularLoad', 
    function($scope, Retningslinje, angularLoad) {
        $scope.retningslinjer = Retningslinje.query();
        angularLoad.loadCSS("../css/retningslinjer_forside.css");
    }
]);

retningslinjeControllers.controller('retningslinjeSectionCtrl', ['$scope', '$routeParams', 'Retningslinje', 'angularLoad',
    function($scope, $routeParams, Retningslinje, angularLoad) {
        $scope.retningslinje = Retningslinje.get({
            id: $routeParams.guidelineId
        });
        angularLoad.loadCSS("../css/retningslinje_forside.css");

    }
]);

retningslinjeControllers.controller('retningslinjeRecommendationCtrl', ['$scope', '$routeParams', 'Retningslinje', 'angularLoad',
    function($scope, $routeParams, Retningslinje, angularLoad) {
        $scope.retningslinje = Retningslinje.get({
                id: $routeParams.guidelineId
            },
            function(retningslinje) {
                $scope.section = retningslinje.sections[$routeParams.sectionId - 1];
                angularLoad.loadCSS("../css/retningslinje_anbefalinger.css");
            }
        );
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