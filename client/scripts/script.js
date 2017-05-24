var myApp = angular.module('myApp', []);

myApp.controller('HeroController', function(HeroService) {
  console.log('NG');
  // grab the view model
  var vm = this;

  // function to add hero
  vm.addHero = function() {
    console.log('clciked add hero', vm.alias);
    var objectToSend = {
      alias: vm.alias,
      city: vm.city,
      power: vm.power
    }
    console.log(objectToSend);
    HeroService.addHeroToDB(objectToSend).then(function(){
      vm.getHero();
    });
  }

  // function to get heros
  vm.getHero = function() {
    console.log('in get Hero');
    HeroService.getHeroFromDB().then(function(response){
      console.log('resp:', response);
      vm.items = response;
      console.log(vm.items);
    });
  }

  // when controller loads it will get all heros
  vm.getHero();
});
