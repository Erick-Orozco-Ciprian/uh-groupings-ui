/* global _, angular, UHGroupingsApp */

(() => {
    /**
     * This controller contains functions specific to the home page.
     * @param $scope - binding between controller and HTML page
     * @param $controller - service for instantiating controllers
     * @param groupingsService - service for creating requests to the groupings API
     */
    function MessageJsController($scope, $controller, groupingsService) {

        $scope.init = () => {
            console.log("inside init");
            //$scope.outageMessage = "Currently undergoing planned maintenance. Site unavailable during this time.";
        };
    }

    UHGroupingsApp.controller("MessageJsController", MessageJsController);

})();