(function() {
    "use strick"
    
    angular.module("angular-lessons").
    controller("name", name);
    
    function name($scope, addName) {
        
        $scope.setName = function(newName) {
            addName.setName(newName);
        };
        
        
        $scope.getName = function() {
            return addName.getName();
        }
    }
})()