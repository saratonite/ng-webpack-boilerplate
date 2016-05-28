'use strict';
import ng from 'angular';
var appControllers = ng.module('app.controllers')

.controller('BarControlller',['$scope','HelloService',function($scope,HelloService){

  $scope.name = HelloService.name;

  angular.element(document).ready(function(){
    document.body.bgColor = "#9b59b6";
  });

}]);

export default appControllers;
