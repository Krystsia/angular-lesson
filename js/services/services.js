(function(){
    angular.module("services", [])
    .factory("addName", addName);
    
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
})()