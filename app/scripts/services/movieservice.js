'use strict';

/**
 * @ngdoc service
 * @name movieProjectApp.MovieService
 * @description
 * # MovieService
 * Service in the movieProjectApp.
 */
angular.module('movieProjectApp')
  .service('MovieService', function ($http) {
    function getPopularMovies(){
        var url = getUrlForRequest(popular);
        $http.get(url).success(function(data, status, headers, config) {
            return data.results;
          }).
          error(function(data, status, headers, config) {
            return null;
          });
    }

    function getUrlForRequest(type) {
        return "https://api.themoviedb.org/3/movie/popular?api_key=8ca72ae90f15b5d823a990ab310a5160";
    }
  });
