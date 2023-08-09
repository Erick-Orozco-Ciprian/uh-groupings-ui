/* global _, angular, UHGroupingsApp */

(() => {

    /**
     * This controller contains functions specific to the home page.
     * @param $scope - binding between controller and HTML page
     * @param $controller - service for instantiating controllers
     * @param groupingsService - service for creating requests to the groupings API
     */
    function HomeJsController($scope, $controller, groupingsService) {
<<<<<<< HEAD
<<<<<<< HEAD
=======

        /**
         * Get outageMessage.
         */
        $scope.getOutageMessage = () =>{
            groupingsService.testerThing((res) =>{
                $scope.outageMessage = res;
                console.log($scope.outageMessage);
            }, (err) =>{
                    console.log("Cannot get outageMessage back!");
                }
            )
        }


>>>>>>> 44e66e46 (fix call error and rename variable)
=======
>>>>>>> 5e9d518b (separate the outageMessage controller)
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
