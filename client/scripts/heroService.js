myApp.service('HeroService', ['$http', function($http) {


  // function to add hero to the database
  this.addHeroToDB = function(heroObject) {
    return $http({
      method: 'POST',
      url: '/hero',
      data: heroObject
    }).then(function(response) {
      console.log(response);
      return response.data;
    });
  };

  // function to get heros from the database
  this.getHeroFromDB = function() {
    return $http.get('/hero').then(function(response) {
      return response.data;
    });
  };
}]);
