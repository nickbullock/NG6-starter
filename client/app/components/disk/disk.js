import angular from 'angular';
import uiRouter from 'angular-ui-router';
import diskComponent from './disk.component';
import diskModel from './disk.model';

let diskModule = angular.module('disk', [
  uiRouter,
  diskModel
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('disk', {
      url: '/disk?path',
      component: 'disk',
      params: {
        path: "disk:/"
      }
    })
})

.component('disk', diskComponent)

.name;

export default diskModule;
