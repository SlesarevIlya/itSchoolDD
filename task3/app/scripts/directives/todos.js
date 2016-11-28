'use strict';

/**
 * @ngdoc directive
 * @name task3App.directive:todos
 * @description
 * # todos
 */
angular.module('task3App')
  .directive('todos', function () {
    return {
      templateUrl: 'views/todos.html',
      controller: 'TodosCtrl',
      controllerAs: 'ctrl',
      restrict: 'EA'
    };
  });
