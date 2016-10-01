(function(){
    angular.module("angular-lessons")
    .filter("dayName", dayName);
    
    function dayName(){
        var days = ["Sunday", "Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
        return function(num) {
            return angular.isNumber(num) ? days[num] : num;
        }
    }
})()