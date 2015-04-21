'use strict';

/**
 * @ngdoc function
 * @name movieProjectApp.controller:PopulermoviescontrollerCtrl
 * @description
 * # PopulermoviescontrollerCtrl
 * Controller of the movieProjectApp
 */
angular.module('movieProjectApp')
  .controller('PopularMoviesCtrl', ['$scope', 'MovieService', function ($scope, MovieService) {
    var movies = MovieService.getPopularMovies();
    movies.then(function(result) {
        $scope.movies = result;
    });
  }]);
