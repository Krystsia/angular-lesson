(function() {
    "use strick"
    
    angular.module("angular-lessons").
    controller("day", day);
    
    function Day($scope, days) {
        $scope.today = days.today;
    }
})()