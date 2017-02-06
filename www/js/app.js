// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
      var APPLICATION_ID = '7FAEBD50-05B5-1C7C-FFAB-97545B4FF900',
          SECRET_KEY = '17777D5F-BF16-80AA-FFFF-C9910FF9BE00',
          VERSION = 'v1'; //default application version;
      Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
      .state('login', {
          url: '/login',
          templateUrl: 'templates/login.html',
          controller: 'LoginCtrl'
      }).state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  }).state('app.perfil', {
    url: '/perfil',
    views: {
      'menuContent': {
        templateUrl: 'templates/perfil.html',
          controller: 'PerfilCtrl'
      }
    }
  }).state('app.promo', {
          url: '/promo',
          views: {
              'menuContent': {
                  templateUrl: 'templates/promo.html',
                  controller: 'PromoCtrl'
              }
          }
      }).state('app.rewards', {
      url: '/rewards',
      views: {
        'menuContent': {
          templateUrl: 'templates/rewards.html',
            controller: 'RewardsCtrl'
        }
      }
    })
      .state('app.message', {
          url: '/message',
          views: {
              'menuContent': {
                  templateUrl: 'templates/message.html',
                  controller: 'MessageCtrl'
              }
          }
      }).state('app.logout', {
      url: '/logout',
      views: {
        'menuContent': {
          templateUrl: 'templates/logout.html',
          controller: 'LogoutCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('login');
});
