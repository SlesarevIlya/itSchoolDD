'use strict';

angular.module('task3App')
  .directive('changeColor', function () {
    return {
      controller: 'changeCtrl',
      controllerAs: 'ctrl',
      restrict: 'EA'
    };
  });
