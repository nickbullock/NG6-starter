import angular from 'angular';
import ngCookies from 'angular-cookies';
import authorizationFactory from './authorization.factory';

let AuthorizationModule = angular.module('authorization', [ngCookies])

.factory('authorizationFactory', authorizationFactory)

.name;

export default AuthorizationModule;
