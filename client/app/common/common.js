import angular from 'angular';
import Authorization from './authorization/authorization';

let commonModule = angular.module('app.common', [
  Authorization
])

.name;

export default commonModule;
