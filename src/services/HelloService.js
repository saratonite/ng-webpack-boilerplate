import ng from 'angular';

var HelloService = ng.module('app.services',[])
.service('HelloService',function(){
  return {
    name:'',
    hello:function(){
      var name = prompt('Enter your name');
      if(name){
        this.name = name;
      }

      return this.name;
    }

  }

});

export default HelloService;
