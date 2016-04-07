app.service('MealDataService', ['$http', '$location', function ($http, $location) {
  return {
    meals: [{price: 30, tax: 2.7, tip: 5.4}],
    total: {},
    getMeals: function () {
      return this.meals;
    },
    getCumulativeTotal: function () {
      // returns totals
    },
    addMeal: function (newMeal) {
      this.meals.push(newMeal);
      return this.meals;
    },
    resetAll: function () {
      console.log($location.path(), $location.url());
      // clears everything
      $location.path('/details');
      return this.meals = [];
    }
  }
}]);
