/**
 * Created by rost on 21.03.15.
 */

var app = angular.module('app', []);
/**
 * Created by rost on 02.04.15.
 */

app.controller('todoCtrl', function ($scope) {
	$scope.newItem = "";
	var todoList = angular.fromJson(localStorage.getItem("todoList")) || [];
	$scope.addItem = function (event) {
		if (event.keyCode === 13) {
			add($scope.newItem);
			$scope.newItem = "";
		}
	};
	function add (title) {
		title = title || "";
		todoList.push({
			title: title,
			done: false
		});
		localStorage.setItem("todoList", angular.toJson(todoList));
	}
});

app.directive('todoItem', function () {
	return {
		restrict: "E",
		scope: {},
		controller: function($scope) {
			$scope.todoList = [];
			$scope.todoList = angular.fromJson(localStorage.getItem("todoList")) || [];
		},
		controllerAs: "items",
		templateUrl: "./app/templates/item.html"
	}
});