app.config(function($routeProvider, $locationProvider) {
  // $locationProvider.html5Mode(true);
  $routeProvider
  .when('/details', {
    templateUrl: './partials/details.html',
    controller: 'detailsController'
  })
  .when('/charges', {
    templateUrl: './partials/charges.html',
    controller: 'chargesController'
  })
  .when('/earnings', {
    templateUrl: './partials/earnings.html',
    controller: 'earningsController'
  })
  .otherwise('/details');
})
