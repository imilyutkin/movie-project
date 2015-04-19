'use strict';

/**
 * @ngdoc function
 * @name movieProjectApp.controller:PopulermoviescontrollerCtrl
 * @description
 * # PopulermoviescontrollerCtrl
 * Controller of the movieProjectApp
 */
angular.module('movieProjectApp')
  .controller('PopularMoviesCtrl', function ($scope) {
    $scope.movies = [
        {
            "name": "popular"
        }
    ];
  });
