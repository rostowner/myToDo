/**
 * Created by rost on 02.04.15.
 */

app.controller('todoCtrl', function ($scope, storage) {

    $scope.todoList = storage.get();

    $scope.add = function () {
        $scope.todoList.push({
            title: "",
            done: false
        });
    };

    $scope.save = function ($event, $element) { // todo: save only this elem
        if ($event.keyCode == '13') {
            storage.put($scope.todoList);
        }
    };

});