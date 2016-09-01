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
            this.name = name;
            return this;
        }

        function getName() {
           return this.name;  
        }
                
    }
})()