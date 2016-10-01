(function(){
	var services = angular.module("services", []);
	services.factory('userService', userService);
	
	function userService() {
		var currentUser;
		
		return {
			setCurrentUser,
			getCurrentUser
		}
		
		function setCurrentUser(user) {
			currentUser = user;
			return this;
		}
		
		function getCurrentUser() {
			return currentUser;
		}
	}
})()