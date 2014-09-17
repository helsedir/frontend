var retningslinjeControllers = angular.module('retningslinjeControllers', []);

retningslinjeControllers.controller('retningslinjeListCtrl', ['$scope', 'Retningslinje',
    function($scope, Retningslinje) {
        $scope.retningslinjer = Retningslinje.query();
    }
]);

retningslinjeControllers.controller('retningslinjeSectionCtrl', ['$scope', '$routeParams', 'Retningslinje',
    function($scope, $routeParams, Retningslinje) {
        $scope.retningslinje = Retningslinje.get({
            id: $routeParams.guidelineId
        });

    }
]);

retningslinjeControllers.controller('retningslinjeRecommendationCtrl', ['$scope', '$routeParams', 'Retningslinje',
    function($scope, $routeParams, Retningslinje) {
        $scope.retningslinje = Retningslinje.get({
                id: $routeParams.guidelineId
            },
            function(retningslinje) {
                $scope.section = retningslinje.sections[$routeParams.sectionId - 1];
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