/**
 * Created by rost on 21.03.15.
 */

var app = angular.module('app', []);
/**
 * Created by rost on 02.04.15.
 */

app.controller('todoCtrl', function ($scope, $element) {

    $scope.newTodo = {
        title: '',
        done: false
    };

    $scope.todoList = localStorage.getItem('todoList') || [{
        title: 'y1',
        done: false
    }, {
        title: 'y2',
        done: false
    }, {
        title: 'no',
        done: true
    }]/*
        .filter(function (x) {
            return !x.done;
        })*/;

});