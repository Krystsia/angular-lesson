(function () {
	"use strict";
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
})();