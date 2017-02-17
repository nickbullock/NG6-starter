import angular from 'angular';
import ngResource from 'angular-resource';

let diskModelFactory = angular
  .module('diskModel', [ngResource])
  .factory('diskModelFactory',
    ["$resource", "authorizationFactory", function($resource, authorizationFactory){
      return $resource("https://cloud-api.yandex.net/v1/disk/resources", {}, {
        get:{
          method: "GET",
          headers: {
            'Authorization': authorizationFactory.getToken()
          }
        }
      });
    }]
  )
  .name;

export default diskModelFactory;

