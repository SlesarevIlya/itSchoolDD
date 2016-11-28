'use strict';

/**
 * @ngdoc overview
 * @name task3App
 * @description
 * # task3App
 *
 * Main module of the application.
 */
angular
  .module('task3App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mgcrea.ngStrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/todos.html',
        controller: 'TodosCtrl',
        controllerAs: 'ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
