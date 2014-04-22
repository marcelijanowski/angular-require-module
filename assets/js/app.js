require.config({
  baseUrl: '/assets/js/',
  packages: [
    {
      name: 'app-auth',
      location: '../vendor/app-auth-module'
    },
    {
      name: 'app-main',
      location: '../vendor/app-main/assets/js',
      main: '../../main'
    },
    {
      name: 'app-session',
      location: '../vendor/app-session-module'
    }
  ],
  paths: {
    angular: '../vendor/angular/angular',
    'angular-route' : '../vendor/angular-route/angular-route',
    lodash: '../vendor/lodash/dist/lodash'
  },
  shim: {
    angular: {
      exports: 'angular'
    },
    'app-main': {
      deps: ['lodash'],
      exports: 'app-main'
    }
  }
});

require(['startup']);
