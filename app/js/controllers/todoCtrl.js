/**
 * Created by rost on 02.04.15.
 */

app.controller('todoCtrl', function ($scope) {
	$scope.newItem = "";
	$scope.todoList = angular.fromJson(localStorage.getItem("todoList")) || [];

    console.log($scope.todoList);

    $scope.addItem = function (event) {
		if (event.keyCode === 13) {
			add($scope.newItem);
			$scope.newItem = "";
		}
	};

	function add (title) {
		title = title || "";
        $scope.todoList.push({
			title: title,
			done: false
		});
		localStorage.setItem("todoList", angular.toJson($scope.todoList));
	}
});

app.directive('todoItems', function () {
	return {
		restrict: "E",
        scope: {
            items: "=items"
        },
        templateUrl: "./app/templates/items.html"
	}
});