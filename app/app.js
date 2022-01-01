'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.hero-card',
  'myApp.open-hero-card',
  'myApp.version'
]).
  config(['$locationProvider', '$routeProvider', "$stateProvider", "$urlRouterProvider", function ($locationProvider, $routeProvider, $urlRouterProvider, $stateProvider) {
    $locationProvider.hashPrefix('!');

    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "index.html",
        controller: "HeroCtrl",
        controllerAs: "HeroCtrl",
        authenticationReqired: false
      });

    $routeProvider.otherwise({ redirectTo: '/' });
  }]);
