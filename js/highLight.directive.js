(function() {
    "use strick"
    
    angular.module("angular-lessons").
    directive("hightlight", hightLight);
    
    function hightLight($filter) {
        var dayFilter = $filter("dayName");
        
        return {
            restrict: "A",
            link: funcHightLighting
        }
        
        function funcHightLighting(scope, element, attr) {
            if(dayFilter(scope.today) === "Friday") {
                element.css("color", "red");
            }
        }
    }
    
    
})()