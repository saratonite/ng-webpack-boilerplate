import ng from 'angular';

var ApiService = ng.module('app.services',[])
.service('Say',function(){
  return {
    hello:function(){
      alert('Hello');
    }
  }

});

export default ApiService;
