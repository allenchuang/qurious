'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider,RestangularProvider) {

    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl',
        controllerAs: 'movies'
      })
      .when('/create/movie', {
        templateUrl: 'views/movie-add.html',
        controller: 'MovieAddCtrl',
        // controllerAs: 'movieAdd'
      })
      .when('/movie/:id', {
        templateUrl: 'views/movie-view.html',
        controller: 'MovieViewCtrl',
        // controllerAs: 'movieView'
      })
      .when('/movie/:id/delete', {
        templateUrl: 'views/movie-delete.html',
        controller: 'MovieDeleteCtrl',
        // controllerAs: 'movieDelete'
      })
      .when('/movie/:id/edit', {
        templateUrl: 'views/movie-edit.html',
        controller: 'MovieEditCtrl',
        // controllerAs: 'movieEdit'
      })
      .when('/showtime', {
        templateUrl: 'views/showtime.html',
        controller: 'ShowtimeCtrl',
        controllerAs: 'showtime'
      })
      .when('/movie-showtimes', {
        templateUrl: 'views/movie-showtimes.html',
        controller: 'MovieShowtimesCtrl',
        controllerAs: 'movieShowtimes'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('MovieRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Movie', function(MovieRestangular) {
    return MovieRestangular.service('movie');
  });
  
  // Restangular way

  // .factory('MovieShowtimesRestangularApi', function(Restangular) {
  //   return Restangular.withConfig(function(RestangularConfigurer) {
  //     RestangularConfigurer.setBaseUrl("http://data.tmsapi.com/v1.1/movies/showings?startDate=2015-01-21&zip=60611&api_key=1234567890")
  //   });
  // })

  // $http way
  // .factory('MovieShowtimeApi', function($http,$q) {
  //   var service = {};
  //   var baseUrl = 'http://data.tmsapi.com/v1.1/movies/showings?startDate=2015-01-21&zip=60611&api_key=1234567890',
  //       finalUrl = '';
  //   var startDate = '';
  //       zip='',
  //       api_key='c4dr2feuexrgz2gudpr8z8ay';

  //   var makeUrl = function() {
  //     startDate = 

  //   }

  // });
