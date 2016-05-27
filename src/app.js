
import ng from 'angular';
import ngRoute from 'angular-route';

import appControllers from './controllers/FooController';
import barControllers from './controllers/BarController';

import ApiServices from './services/HelloService';

ng.module('app',[ngRoute,'app.controllers','app.controllers','app.services'])

.config(function($routeProvider){



  $routeProvider.when('/',{
    controller:'FooControlller',
    template:require('./templates/Foo.html')
  })
  $routeProvider.when('/bar',{
    controller:'BarControlller',
    template:require('./templates/Bar.html')
  })



  .otherwise({redirectTo:'/'});

})

.controller('MainCtrl',function($scope){

});
