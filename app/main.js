/**
 * Created by rost on 21.03.15.
 */

var app = angular.module('app', []);
/**
 * Created by rost on 02.04.15.
 */

app.controller('todoCtrl', function ($scope, storage) {

    $scope.todoList = storage.get();

});
/**
 * Created by rost on 10.04.15.
 */

app.factory('storage', function () {
    var STORAGE_ID = 'myToDo';

    return {
        get: function () {
            return JSON.parse(localStorage.getItem(STORAGE_ID) || '[{ "title": "", "done": false }]');
        },

        put: function (arr) {
            localStorage.setItem(STORAGE_ID, JSON.stringify(arr));
        }
    };
});