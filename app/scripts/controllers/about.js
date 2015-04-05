'use strict';

/**
 * @ngdoc function
 * @name movieProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the movieProjectApp
 */
angular.module('movieProjectApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
