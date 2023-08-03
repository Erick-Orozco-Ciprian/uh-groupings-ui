/* global _, angular, UHGroupingsApp */

(() => {

    /**
     * This controller contains functions specific to the home page.
     * @param $scope - binding between controller and HTML page
     * @param $controller - service for instantiating controllers
     * @param groupingsService - service for creating requests to the groupings API
     */
    function HomeJsController($scope, $controller, groupingsService) {
        // $scope.testOnSuccess = (res) => {
        //     console.log("in success, res:" + res);
        //     if (res != null) {
        //         console.log("assigning someVar to be true from onSuccess");
        //         $scope.someVar = true;
        //     }
        //     $scope.someVar = false;
        //     console.log("assigning someVar to be false from onSuccess");
        // };
        //
        // $scope.testOnError = () => {
        //     console.log("in error");
        //     $scope.loading = false;
        //     console.log("returning false from error:")
        //     $scope.someVar = false;
        // };

        // $scope.someVar = $scope.test();
        // console.log("someVar = " + $scope.someVar);

        // $scope.someVar = 1;
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

            groupingsService.testerThing((res) => {
                $scope.someVar = res;
                console.log("in test, res:" + res);
                if ($scope.someVar != null) {
                    console.log("assigning someVar to be false from init lalal");
                    $scope.someVar = false;
                    console.log("someVar = " + $scope.someVar);
                } else {
                    console.log("assigning someVar to be false from init");
                    $scope.someVar = false;
                }
            });
        // console.log("someVar = " + $scope.someVar);
        };
    }

    UHGroupingsApp.controller("HomeJsController", HomeJsController);
})();
