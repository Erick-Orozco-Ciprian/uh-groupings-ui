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
            console.log("in success, res:" + res);
            if (res != null) {
                console.log("assigning someVar to be true from onSuccess");
                $scope.someVar = true;
            } else {console.log("assigning someVar to be false from onSuccess");
            $scope.someVar = false;}
        };

        $scope.testOnError = () => {
            console.log("in error");
            $scope.loading = false;
            console.log("returning false from error:")
            $scope.someVar = false;
        };
        // $scope.someVar = $scope.test();
        // console.log("someVar = " + $scope.someVar);

        // $scope.someVar = 1;
        $scope.init = () => {
            console.log("inside init");
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
                    console.log("in testerThing, res:" + res);
                    if (res != null) {
                        console.log("someVar = true from init");
                        $scope.someVar = true;
                        $scope.outageMessage = res;
                    } else {
                        console.log("someVar = false from init");
                        $scope.someVar = false;
                        $scope.outageMessage = "no message";
                    }
                }, (err) => {
                    console.log("error in testerThing:" + err)
                });
            // groupingsService.testerThing($scope.testOnSuccess, $scope.testOnError);
            // groupingsService.testerThing((res) => {
            //     console.log("in testerThing, res:" + res);
            //     if (res != null) {
            //         console.log("someVar = true from init");
            //         $scope.someVar = true;
            //     } else {
            //         console.log("someVar = false from init");
            //         $scope.someVar = false;
            //     }
            // });
        // console.log("someVar on line 61 =  " + $scope.someVar);
        };
    }

    UHGroupingsApp.controller("HomeJsController", HomeJsController);
})();
