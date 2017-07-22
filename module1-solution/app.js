(function () {

'use strict';
    angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckControllerFunc);
LunchCheckControllerFunc.$inject = ['$scope'];

function LunchCheckControllerFunc($scope) {
    $scope.lunchItems = "";
    $scope.msg = "";
    $scope.checkCount = function() {
        var input = $scope.lunchItems.trim();
        var count = $scope.lunchItems.split(",").length;
        console.log(count);
        if (!!input && count <=3 && count > 0) {
            $scope.msg =   "Enjoy!"
        } else if (!!input && count >= 4) {
            $scope.msg = "Too Much!";
        } else {
            $scope.msg = "";
        }
    }
}

})();