(function() {
    "use strick"
    
    angular.module("angular-lessons").
    directive("hightlight", hightLight);
    
    function hightLight() {
        return {
            restrict: "A",
            link: funcHightLighting
        }
    }
    
    function funcHightLighting(scope, element, attr) {
        if(scope.today === "Thursday") {
            element.css("color", "red");
        }
    }
})()