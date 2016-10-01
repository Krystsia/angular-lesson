(function() {
    "use strick"
    
    angular.module("angular-lessons")
    .controller("name", name)
	.config(configProvider);
	
	function configProvider(greetingProvider) {
		greetingProvider.config(' Kirill');
		console.log(greetingProvider);
	}
    
    function name($scope, addName, addColor, greeting, addMe) {
        
        $scope.setName = function(newName, e) {
            addName.setName(newName);
			e.preventDefault();
        };
        
        $scope.getName = function() {
            return addName.getName();
        };
		
		$scope.colors = {
			red: addColor.getColor("red"),
			green: addColor.getColor("green"),
			blue: addColor.getColor("blue")
		};
		
		$scope.Me = addMe[0].get;
		
		console.log(greeting.sayHello());
    }
})()