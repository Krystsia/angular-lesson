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
        add: function(action) {
          this.items.push({action:action, done: false});
        }
      
        
	});
  application.controller("myData", function($scope, model) {
	$scope.myData = model;
    $scope.incompleteCount = incompleteCount;
  })
  function incompleteCount(items) {
    var count = 0;
    
    angular.forEach(items, function(item) {
      if(!item.done) count++;
    });
    
    if(count === items.length) return "All incompleted";
    
    return count;
  }
})();