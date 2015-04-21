'use strict';

/**
 * @ngdoc function
 * @name movieProjectApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the movieProjectApp
 */
angular.module('movieProjectApp')
  .controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.isActive = function(routeLocation) {
        return routeLocation === $location.path();
    }
  }]);
