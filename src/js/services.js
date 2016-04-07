app.service('MealDataService', ['$http', function ($http) {
  return {
    meals: [].
    total: {},
    getMeals: function () {
      // return all meals
    },
    getCumulativeTotal: function () {
      // returns totals
    },
    addMeal: function () {
      // adds a new meal
    },
    resetAll: function () {
      // clears everything
    }
  }
}]);
