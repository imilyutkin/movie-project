'use strict';

/**
 * @ngdoc function
 * @name movieProjectApp.controller:NowplayingmoviesCtrl
 * @description
 * # NowplayingmoviesCtrl
 * Controller of the movieProjectApp
 */
angular.module('movieProjectApp')
  .controller('NowPlayingMoviesCtrl', ['$scope', 'MovieService', function ($scope, MovieService) {
    var movies = MovieService.getNowPlayingMovies();
    movies.then(function(result) {
        $scope.movies = result;
    });
  }]);
