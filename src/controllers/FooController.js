'use strict';
import ng from 'angular';
var appControllers = ng.module('app.controllers',[])

.controller('FooControlller',function($scope,HelloService){

  $scope.name = "Ng-Webpack-Boilerplate";

  $scope.app = require('../../package.json');

  $scope.name = HelloService.name;

  $scope.hai = function(){

    $scope.name = HelloService.hello();

  }

  angular.element(document).ready(function () {
        document.body.bgColor = "#e74c3c";
  });


});

export default appControllers;
