'use strict';
import ng from 'angular';
var appControllers = ng.module('app.controllers',[])

.controller('FooControlller',function($scope,Say){

  $scope.name = "Ng-Webpack-Boilerplate";

  $scope.app = require('../../package.json');
  $scope.hai = function(){

    Say.hello();

  }


  angular.element(document).ready(function () {
        document.body.bgColor = "#f56";
  });


});

export default appControllers;
