'use strict';

/**
 * @ngdoc function
 * @name task3App.controller:TodosCtrl
 * @description
 * # TodosCtrl
 * Controller of the task3App
 */
angular.module('task3App')
  .controller('TodosCtrl', function ($resource,settings,todoStates) {
    var ctrl = this;
    ctrl.todoStates = todoStates;
    ctrl.todos = null;
    var todosResource = null;

    ctrl.newTodo = {
      text:'',
      toDate:null
    };

    todosResource = $resource(settings.apiUrl+'/todos/');

    ctrl.addTodo = function(){
      todosResource.save({
        text: ctrl.newTodo.text,
        toDate: ctrl.newTodo.toDate
      },function (todo){
        ctrl.todos.push(todo);
        clearNewTodo();
      });
    };

    ctrl.onTodoDelete = function(deletedTodo){
      ctrl.todos = ctrl.todos.filter(function(todo){
        return todo.todoId !== deletedTodo.todoId;
      });
    };

    var getTodos = function(){
      todosResource.query(function(data){
        ctrl.todos = data;
      });
    };

    var clearNewTodo = function(){
      ctrl.newTodo = {
        text:'',
        toDate:null
      };
    };

    getTodos();
  });
