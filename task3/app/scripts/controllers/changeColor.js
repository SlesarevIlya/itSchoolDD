'use strict';


angular.module('task3App')
  .controller('changeCtrl', function () {
    var ctrl = this;

    ctrl.changeColor = function () {
      var select = document.getElementById('colorSelect');
      console.log(select.options[select.selectedIndex].value);
      //modify
      //less.modifyVars({
      //  '@color': color
      //});
    };

  });
