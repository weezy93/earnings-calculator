app.controller('detailsController', ['$scope', 'MealDataService', function($scope, MealDataService) {
  $scope.meal = {};

  $scope.addMeal = function (meal) {
    meal.price = Number(meal.price);
    meal.tax = Number(meal.tax);
    meal.tip = Number(meal.tip);
    MealDataService.addMeal($scope.meal);
    $scope.meal = {};

    // logic to calculate tax and tip
    // give success message
  };

}])
app.controller('chargesController', ['$scope', 'MealDataService', function($scope, MealDataService) {
  $scope.allMeals = MealDataService.getMeals();
  $scope.index = 0;



  $scope.previousMeal = function () {
    if ($scope.index === 0) {
      // add class to disable button?
      $scope.index = 0;
    } else {
      --$scope.index;
    }
  };
  $scope.nextMeal = function () {
    if ($scope.index === $scope.allMeals.length -1) {
      // add class to disable button?
      $scope.index = $scope.allMeals.length -1;
    } else {
      ++$scope.index;
    }
  }
}])
app.controller('earningsController', ['$scope', 'MealDataService', function($scope, MealDataService) {

}])
app.controller('resetController', ['$scope', 'MealDataService', function($scope, MealDataService) {

}]);
