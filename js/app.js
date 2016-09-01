(function () {
  
	"use strict";

	var application = angular.module("angular-lessons", ["services"]);
	application.value('model', {
	  user: "Kirill",
	  userPhoto: 'images/Hipstory00.jpg'
	});
  
	application.controller("myData", function($scope, model) {
		$scope.myData = model;
		$scope.incompleteCount = incompleteCount;
		$scope.warningLevel = warningLevel;
		$scope.addNewItem = addNewItem;
        $scope.showComplete = true;
	});
    
    application.controller("name", name);
    
    function name(addName) {
       console.log(addName);
    }
	
    application.filter('checkedItems', checkedItems);
    application.directive('taskList', taskList);
    application.directive('mainHeader', mainHeader);
    application.directive('taskForm', taskForm);
    application.run(runApp);
    
	
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
			 .get('../js/main.json')
			 .then(function(response) {
			model.items = response.data;
		});
        $http
            .get('../js/todo.json')
            .then(function(response) {
            model.days = response.data.days;
        });
	}
    
    function taskList() {
        return {
            restrict: "E",
            templateUrl: "table.html"
        }
    }
    
    function mainHeader() {
        return {
            restrict: "E",
            templateUrl: "header.html"
        }
    }
    
    function taskForm() {
        return {
            restrict: "A",
            templateUrl: "form.html"
        }
    }
	
})();


