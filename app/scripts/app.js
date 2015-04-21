'use strict';

/**
 * @ngdoc overview
 * @name movieProjectApp
 * @description
 * # movieProjectApp
 *
 * Main module of the application.
 */
angular
  .module('movieProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/popularmovies', {
        templateUrl: 'views/movielist.html',
        controller: 'PopularMoviesCtrl'
      })
      .when('/topratedmovies', {
        templateUrl: 'views/movielist.html',
        controller: 'TopRatedMoviesCtrl'
      })
      .when('/nowplayingmovies', {
        templateUrl: 'views/movielist.html',
        controller: 'NowPlayingMoviesCtrl'
      })
      .when('/upcomingmovies', {
        templateUrl: 'views/movielist.html',
        controller: 'UpcomingMoviesCtrl'
      })
      .otherwise({
        redirectTo: '/popularmovies'
      });
  });
