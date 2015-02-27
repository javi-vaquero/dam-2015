var todoApp = angular.module('todoApp', []);

todoApp.controller('TodoController', ['$scope', function($scope) {
    var todos = [];
    todos.push({done: false, task:'Aprender AngularJS'});
    todos.push({done: false, task:'Aprender Ionic'});
    todos.push({done: true, task:'Adorar JavaScript'});

    $scope.todos = todos;

    $scope.addTodo = function(){
    	todos.push({ done:false, task: $scope.inputText });
    	$scope.inputText='';
    };

}]);
