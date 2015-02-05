'use strict';

/**
 * @ngdoc function
 * @name 01HolaMundoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 01HolaMundoApp
 */
angular.module('01HolaMundoApp')
  .controller('MainCtrl',['$scope', function (a) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      a.nombre =' asd';
      this.eliminaThing=function(index){
          this.awesomeThings.splice(index,1);
      };
  }]);
