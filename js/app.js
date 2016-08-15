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
	  ],

	});
  
	application.controller("myData", function($scope, model) {
		$scope.myData = model;

		//  API

		$scope.incompleteCount = incompleteCount;
		$scope.warningLevel = warningLevel;
		$scope.addNewItem = addNewItem;
	  
	//	IMP
	  
	  
		
		

		function incompleteCount(items) {
			var count = 0;

			angular.forEach(items, function(item) {
			  if(!item.done) count++;
			});
			
			return count;
		}
		

		function warningLevel(items) {
			return incompleteCount(items) < 3 
				? "info" 
				: "warning"
		}
		
		function addNewItem(items, newItem) {
			if(newItem && newItem.action) {
				items.push({
					action: newItem.action,
					done: false
				});
				
				newItem.action = "";
			}
		}
	})
})();