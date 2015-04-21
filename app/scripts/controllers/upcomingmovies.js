'use strict';

/**
 * @ngdoc function
 * @name movieProjectApp.controller:UpcomingmoviesCtrl
 * @description
 * # UpcomingmoviesCtrl
 * Controller of the movieProjectApp
 */
angular.module('movieProjectApp')
  .controller('UpcomingMoviesCtrl', ['$scope', 'MovieService', function ($scope, MovieService) {
    var movies = MovieService.getUpcomingMovies();
    movies.then(function(result) {
        $scope.movies = result;
    });
  }]);
