(function(){
    angular.module("services", [])
    .factory("addName", addName)
	.service('addColor', addColor)
	.provider('greeting', greeting)
	.constant('defaultGreeting', ' SomeOne')
	.factory('addMe', addMe);
	
	function addMe() {
		return [
			{get: "Kirill"}
		]
			
		
	}
	

	
    function addName() {
        var mainName;
            
        return {
            setName, 
            getName
        }
        
        function setName(name) {
            mainName = name;
            return this;
        }

        function getName() {
           return mainName;  
        }
                
    }
	
	
	function addColor() {
		addColor.prototype.getColor = function(color){
			return color + "-class";
		}
	}
	
	function greeting(defaultGreeting) {
		var name = defaultGreeting;
		return {
			config: function(newName) {
				if(newName) {
					name = newName;
					return this;
				}
				else return name;
				
			},
			$get: function() {
				return {
					sayHello: function() {
						console.log('hello' + name);
					}
				}
				
			} 
		}
	}
	
})()