import controller from './disk.controller';
import template from './disk.template.html';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

let diskComponent = {
  restrict: 'E',
  controller,
  template
};

export default diskComponent;
