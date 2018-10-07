(function() {
  var app = angular.module("Movie", []);
  var API_KEY = 'dc8fb46eff99a53f28c05d7174e9c72c';
  var IMAGE_URL_PREFIX = "https://image.tmdb.org/t/p/w370_and_h556_bestv2";

  app.controller("MovieController", ['$scope', '$http', function($scope, $http) {
    $scope.getPopular = function() {
      $http({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/popular',
        params: {api_key: API_KEY}
      }).then(function(response) {
        console.log(response);
        $scope.popularMovies = response.data.results;
      });
    };

    $scope.getFullImageUrl = function(lastSegment) {
      return IMAGE_URL_PREFIX + lastSegment;
    }
  }]);
})();
