(function () {
  
	"use strict";

	var application = angular.module("angular-lessons", []);
	application.value('model', {
	  user: "Kirill",
	  userPhoto: ''
	});
  
	application.controller("myData", function($scope, model) {
		$scope.myData = model;
		$scope.incompleteCount = incompleteCount;
		$scope.warningLevel = warningLevel;
		$scope.addNewItem = addNewItem;
        $scope.showComplete = true;
	});
	
	application.run(runApp);
    application.filter('checkedItems', checkedItems);
	
	function incompleteCount(collection) {
		var count = 0;

		angular.forEach(collection, function(item) {
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
	
    function checkedItems() {
        return function(items, showComplete){
        var result = [];
        
            angular.forEach(items, function(item) {
                if(item.done || showComplete) result.push(item);
            })
                      
        return result;
        }
    }
	
	function runApp($http, model) {
		$http
			 .get("main.json")
			 .then(function(response) {
			model.items = response.data;
		});
	}
	
})();