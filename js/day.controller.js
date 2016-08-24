(function() {
    "use strick"
    
    angular.module("angular-lessons").
    controller("Day", Day);
    
    function Day($scope) {
        var days = ["Sunday", "Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
        $scope.today = days[new Date().getDay()];
    }
})()