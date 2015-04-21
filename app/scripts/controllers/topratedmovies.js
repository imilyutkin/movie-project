'use strict';

/**
 * @ngdoc function
 * @name movieProjectApp.controller:TopratedmoviesCtrl
 * @description
 * # TopratedmoviesCtrl
 * Controller of the movieProjectApp
 */
angular.module('movieProjectApp')
  .controller('TopRatedMoviesCtrl', ['$scope', 'MovieService', function ($scope, MovieService) {
    var movies = MovieService.getTopRatedMovies();
    movies.then(function(result) {
        $scope.movies = result;
    });
  }]);
