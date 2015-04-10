/**
 * Created by rost on 02.04.15.
 */

app.controller('todoCtrl', function ($scope, storage) {

    $scope.todoList = storage.get();


});