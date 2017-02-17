import angular from 'angular';
import Disk from './disk/disk';

let componentModule = angular.module('app.components', [
  Disk
])

.name;

export default componentModule;
