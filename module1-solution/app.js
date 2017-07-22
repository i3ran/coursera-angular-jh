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
        var items = input.split(",");
        var validItems = new Array();
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.trim().length > 0) {
                validItems.push(item);
                console.log("items" + i + ":" + item);
            }
        }
        var count = validItems.length;
        console.log("valid count:"+count);
        if (count <=3 && count > 0) {
            $scope.msg =   "Enjoy!"
        } else if (count >= 4) {
            $scope.msg = "Too Much!";
        } else {
            $scope.msg = "Please enter data first";
        }
    }
}

})();