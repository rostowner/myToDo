/**
 * Created by rost on 21.03.15.
 */

var app = angular.module('app', []);
/**
 * Created by rost on 02.04.15.
 */

app.controller('todoCtrl', function ($scope, $element) {

    $scope.todoList = [];

    $scope.name = 'abc';

    console.log($element);
    console.log(1);

});