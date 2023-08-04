/* global _, angular, UHGroupingsApp */

(() => {
    /**
     * This controller contains functions specific to the home page.
     * @param $scope - binding between controller and HTML page
     * @param $controller - service for instantiating controllers
     * @param groupingsService - service for creating requests to the groupings API
     */
    function OutageMessageJsController($scope, $controller, groupingsService) {
        /**
         * Get outageMessage.
         */
        $scope.init = () =>{
            groupingsService.testerThing((res) =>{
                $scope.outageMessage = res;
            }, (err) =>{
                    console.log(err);
                }
            )
        }

    }

    UHGroupingsApp.controller("OutageMessageJsController", OutageMessageJsController);
})();

