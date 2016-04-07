app.service('MealDataService', ['$http', function ($http) {
  return {
    meals: [],
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
    resetAll: function (obj) {
      // clears everything
      return obj = {};
    }
  }
}]);
