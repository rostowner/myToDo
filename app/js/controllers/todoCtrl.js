/**
 * Created by rost on 02.04.15.
 */

app.controller('todoCtrl', function ($scope) {

	$scope.newItem = "";

    $scope.todoList = localStorage.getItem("todoList") || [];

    function add (title) {
	    title = title || "";
        $scope.todoList.push({
            title: title,
            done: false
        });
    }

	$scope.addItem = function (event) {
		if (event.keyCode === 13) {
			add($scope.newItem);
			$scope.newItem = "";
		}
	};

    $scope.save = function ($event, $element) { // todo: save only this elem
        if ($event.keyCode == '13') {
	        localStorage.setItem("todoList", $scope.todoList);
        }
    };

});