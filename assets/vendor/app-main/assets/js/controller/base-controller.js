define([
  'lodash',
  './assets/js/helper/module-helper'
], function (_, helper) {
  return function (name, deps, funcs) {
    helper.registerController(arguments);
  };
});