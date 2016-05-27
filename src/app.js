
import ng from 'angular';
import ngRoute from 'angular-route';
import ngAnimate from 'angular-animate';




import appControllers from './controllers/FooController';
import barControllers from './controllers/BarController';

import HelloService from './services/HelloService';

ng.module('app',['ngRoute','ngAnimate','app.controllers','app.controllers','app.services'])

.config(function($routeProvider){

  $routeProvider.when('/',{
    controller:'FooControlller',
    template:require('./templates/Foo.html')
  })

  .when('/bar',{
    controller:'BarControlller',
    template:require('./templates/Bar.html')
  })

  .otherwise({redirectTo:'/'});

});
