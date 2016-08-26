(function(){
    angular.module("angular-lessons")
        .service("days", days);
    
    function days() {
        this.today = new Date().getDay();
    }
})()