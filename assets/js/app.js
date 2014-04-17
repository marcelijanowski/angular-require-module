require.config({
  baseUrl: '/assets/js/',
  packages: [
    {
      name: 'app-auth',
      location: '../vendor/app-auth-module',
      main: 'main'
    },
    {
      name: 'app-main',
      location: '../vendor/app-main',
      main: 'main'
    },
    {
      name: 'app-session',
      location: '../vendor/app-session-module',
      main: 'main'
    }
  ],
  paths: {
    angular: '../vendor/angular/angular',
    'angular-route' : '../vendor/angular-route/angular-route'
  }
});

require(['startup']);
