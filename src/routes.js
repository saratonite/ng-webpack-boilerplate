routing.$inject = ['$routerProvider'];

export default function routing ($routeProvider){
  $routeProvider.when('/',{
    controller:'MainCtrl',
    template:function(){
      return '<h1>ng-boffice</h1>';
    }
  })

  .otherwise({redirectTo:'/'});
};
