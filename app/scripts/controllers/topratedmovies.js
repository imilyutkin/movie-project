'use strict';

/**
 * @ngdoc function
 * @name movieProjectApp.controller:TopratedmoviesCtrl
 * @description
 * # TopratedmoviesCtrl
 * Controller of the movieProjectApp
 */
angular.module('movieProjectApp')
  .controller('TopRatedMoviesCtrl', function ($scope) {
    $scope.movies = [
        {
            "name": "top rated"
        },
        {
            "name": "hello"
        }
    ];
  });
