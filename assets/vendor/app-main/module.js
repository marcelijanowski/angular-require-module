define(['angular'], function (A) {
  A.module('app_main.controllers', []);
  A.module('app_main.providers', []);
  A.module('app_main.services', []);

  var module = A.module('app_main', [
    'app_main.controllers',
    'app_main.providers',
    'app_main.controllers',
    'app_main.services'
  ]);
  return module;
});
