(function() {
    "use strick"
    
    angular.module("angular-lessons").
    controller("Day", Day);
    
    function Day($scope, days) {
        $scope.today = days.today;
    }
})()