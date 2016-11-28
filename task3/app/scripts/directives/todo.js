'use strict';

angular.module('task3App')
  .directive('todo', function () {
    return {
      templateUrl: 'views/todo.html',
      controller: 'TodoCtrl',
      controllerAs: 'ctrl',
      restrict: 'E',
      bindToController: true,
      scope:{
        todo:'=',
        onDelete:'&'
      }
    };
  });
