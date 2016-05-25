
import ng from 'angular';
import ngRoute from 'angular-route';

import appControllers from './FooController';
import barControllers from './barController';

ng.module('boffice',[ngRoute,'boffice.controllers'])

.config(function($routeProvider){

  $routeProvider.when('/',{
    controller:'MainCtrl',
    template:function(){
      return '<h1>ng-boffice</h1>';
    }
  })

  $routeProvider.when('/foo',{
    controller:'FooControlller',
    template:function(){
      return '<h1>Foo</h1>';
    }
  })
  $routeProvider.when('/bar',{
    controller:'BarControlller',
    template:function(){
      return '<h1>Bar</h1>';
    }
  })



  .otherwise({redirectTo:'/'});

})

.controller('MainCtrl',function($scope){

});
