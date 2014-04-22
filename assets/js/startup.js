define([
  'angular',
  'config'
], function (A, cfg) {
  require([
    'app-main'
  ], function () {
    A.module(cfg.ngApp, [
    ]);
    require(['controller/app-controller'], function () {
      A.bootstrap(document.documentElement, [cfg.ngApp]);
    });

  });
});

