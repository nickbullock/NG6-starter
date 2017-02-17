import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'angular-ui-router/release/stateEvents';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    Common,
    Components,
    'ui.router.state.events'
  ])
  .config(($locationProvider, $urlRouterProvider, $stateProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/auth');

    $stateProvider
      .state('auth', {
        url: '/auth',
        controller: function($state, $stateParams, authorizationFactory){
          /**
           * @description
           * yandex disk returns token as parameter #
           * string like 'access_token=AQAAAAAKnDKCAAQPm3z9zx55BEyeqB0IobUGlyg&token_type=bearer&expires_in=31535753'
           */
          if($stateParams["#"]){
            const token = authorizationFactory.parseToken($stateParams["#"]);
            authorizationFactory.setToken(token);
            $state.go("disk");
          }
          else{
            authorizationFactory.authorize();
          }
        }
      });

    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .run(["$window", "$state", "$stateParams", "authorizationFactory", "$transitions",
    function($window, $state, $stateParams, authorizationFactory, $transitions){
      $window.localStorage.setItem("clientId", "1375d4c794af483195a27dd9bad1f576");

      $transitions.onStart({}, function() {
        if(!authorizationFactory.isSignedIn() && !$state.is("auth") && $state.current.name !== ""){
          $window.location = "/auth";
        }
      });
    }]
  )

  .component('app', AppComponent);
