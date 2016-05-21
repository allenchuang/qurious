'use strict';

describe('Controller: MovieShowtimesCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var MovieShowtimesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MovieShowtimesCtrl = $controller('MovieShowtimesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MovieShowtimesCtrl.awesomeThings.length).toBe(3);
  });
});
