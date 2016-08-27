(function(){
    angular.module("angular-lessons")
        .service("getDay", getDay);
    
    function getDay($http, model) {
		$http.get("js/todo.json").  
		 then(function(response) {
			this.days = response.data.days;
		})
       
    }
})()