'use strict';

angular.module('task3App')
  .controller('TodoCtrl', function ($resource,settings,todoStates) {
    var ctrl = this;
    ctrl.todoStates = todoStates;
    var todoResource = null;

    ctrl.newTodo = {
      text:'',
      toDate:null
    };

    todoResource = $resource(settings.apiUrl+'/todos/:todoId',{todoId:'@todoId'},{
      update:{method:'PUT'}
    });

    ctrl.done = function(){
      ctrl.todo.state = todoStates.done;
      todoResource.update({}, ctrl.todo);
    };

    ctrl.delete = function(){
      todoResource.delete({todoId : ctrl.todo.todoId});
      ctrl.onDelete(ctrl.todo);
    };

    ctrl.edit = function () {
      ctrl.todo.text = ctrl.editTodo.text;
      ctrl.todo.toDate = ctrl.editTodo.toDate;
      todoResource.update({}, ctrl.todo);
    };

  });
