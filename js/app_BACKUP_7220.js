(function () {
	"use strict";
<<<<<<< HEAD
	
	 var mainModul = angular.module("angular-lessons", []);
    mainModul.value('firstModule', {
      name: 'Kiril',
      surname: 'Krystsia'
    })
=======
	var application = angular.module("angular-lessons", []);
	application.value('model', {
		user: "Kirill",
	    userPhoto: '',
	  	items: [
		  {action: "Estimate...", done: false},
		  {action: "Create...", done: false},
		  {action: "Edit...", done: true},
		  {action: "Delete..", done: false},
		]
	});
  application.controller("myData", function($scope, model) {
	$scope.myData = model;
  })
>>>>>>> 889a9fa732b5a1729116eb2661db81daab781eea
})();