/* global _, angular, UHGroupingsApp */

(() => {

    /**
     * This controller contains functions specific to the home page.
     * @param $scope - binding between controller and HTML page
     * @param $controller - service for instantiating controllers
     * @param groupingsService - service for creating requests to the groupings API
     */
    function HomeJsController($scope, $controller, groupingsService) {

        $scope.testOnSuccess = (res) => {
            console.log("in success");
            if (res != null) {
                console.log("returning true:");
                return true;
            }
            console.log("returning false");
            return false;
        };

        $scope.testOnError = () => {
            console.log("in error");
            $scope.loading = false;
            console.log("returning false:")
            return false;
        };

        $scope.test = () => {
            console.log("in test");
            return groupingsService.testerThing($scope.testOnSuccess,$scope.testOnError);
        };
        $scope.someVar = $scope.test();

        $scope.init = () => {
            /**
             * Get the number of memberships that the current user is associated with.
             */
            groupingsService.getNumberOfMemberships((res) => {
                    $scope.numberOfMemberships = res;
                }
            );

            /**
             * Get the number of groupings that the current user is associated with.
             */
            groupingsService.getNumberOfGroupings((res) => {
                    $scope.numberOfGroupings = res;
                }
            );
        };
    }

    UHGroupingsApp.controller("HomeJsController", HomeJsController);
})();
