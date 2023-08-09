/* global _, angular, UHGroupingsApp */

(() => {

    /**
     * This controller contains functions specific to the home page.
     * @param $scope - binding between controller and HTML page
     * @param $controller - service for instantiating controllers
     * @param groupingsService - service for creating requests to the groupings API
     */
    function HomeJsController($scope, $controller, groupingsService) {
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

            groupingsService.getOutageMessage((res) => {
                console.log("in getOutageMessage, res:" + res);
                if (res != null) {
                    console.log("someVar = true from init");
                    $scope.someVar = true;
                    $scope.outageMessage = res;
                } else {
                    console.log("someVar = false from init");
                    $scope.someVar = false;
                }
            });
        };
    }

    UHGroupingsApp.controller("HomeJsController", HomeJsController);
})();
