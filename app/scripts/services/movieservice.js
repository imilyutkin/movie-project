'use strict';

/**
 * @ngdoc service
 * @name movieProjectApp.MovieService
 * @description
 * # MovieService
 * Service in the movieProjectApp.
 */
angular.module('movieProjectApp')
  .service('MovieService', ['$http', '$q', function ($http, $q) {
    this.getPopularMovies = function() {
      return this.getMovies("popular");
    },

    this.getTopRatedMovies = function() {
        return this.getMovies("top_rated");
    },

    this.getNowPlayingMovies = function() {
      return this.getMovies('now_playing');
    },

    this.getUpcomingMovies = function() {
      return this.getMovies('upcoming');
    },

    this.getMovies = function(type) {
      var deferred = $q.defer();
        var url = this.getUrlForRequest(type);
        $http.get(url).success(function(data, status, headers, config) {
            deferred.resolve(data.results);
          }).
          error(function(data, status, headers, config) {
            deferred.reject(data);
          });
        return deferred.promise;
    },

    this.getUrlForRequest = function(type) {
        var movieUrl =  "https://api.themoviedb.org/3/movie/";
        var apiKey = "?api_key=8ca72ae90f15b5d823a990ab310a5160";
        return movieUrl + type + apiKey;
    }
  }]);
