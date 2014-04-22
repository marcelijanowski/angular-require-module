define([
  'config',
  'angular',
  'app-main/controller/base-controller',
  'app-main/factory/base-factory'
], function (cfg, A, SkyStoreController) {
  new SkyStoreController('appController',[
    '$scope',
    '$location',
  ], {
    init: function () {
    }
  });
});