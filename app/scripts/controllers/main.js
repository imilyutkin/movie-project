'use strict';

/**
 * @ngdoc function
 * @name movieProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieProjectApp
 */
angular.module('movieProjectApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
