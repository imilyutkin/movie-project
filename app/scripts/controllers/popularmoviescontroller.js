'use strict';

/**
 * @ngdoc function
 * @name movieProjectApp.controller:PopulermoviescontrollerCtrl
 * @description
 * # PopulermoviescontrollerCtrl
 * Controller of the movieProjectApp
 */
angular.module('movieProjectApp')
  .controller('PopularMoviesCtrl', function ($scope, $http) {
    var url = "https://api.themoviedb.org/3/movie/popular?api_key=8ca72ae90f15b5d823a990ab310a5160";
     $http.get(url).success(function(data, status, headers, config) {
            $scope.movies = data.results;
          }).
          error(function(data, status, headers, config) {
            $scope.movies =  null;
          });
  });
