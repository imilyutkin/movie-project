'use strict';

describe('Controller: TopratedmoviesCtrl', function () {

  // load the controller's module
  beforeEach(module('movieProjectApp'));

  var TopratedmoviesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TopratedmoviesCtrl = $controller('TopratedmoviesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
