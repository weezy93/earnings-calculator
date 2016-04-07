app.controller('detailsController', ['$scope', 'MealDataService', function($scope, MealDataService) {
  $scope.meal = {};

  $scope.addMeal = function (meal) {
    meal.price = Number(meal.price);
    meal.tax = meal.price * meal.tax / 100;
    meal.tip = meal.price * meal.tip /100;
    console.log(MealDataService.addMeal($scope.meal));
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

  var allMeals =  MealDataService.getMeals();

  var tipTotal = allMeals.reduce((prev, meal) => prev += meal.tip, 0);

  $scope.tipTotal = tipTotal;


  $scope.mealCount = allMeals.length;
  $scope.averageTip = tipTotal / allMeals.length;

}])
app.controller('resetController', ['$scope', 'MealDataService', function($scope, MealDataService) {
  $scope.resetAll = function () {
    return MealDataService.resetAll();
    // redirect after reset
  };

}]);
