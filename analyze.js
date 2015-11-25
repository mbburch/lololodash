var _ = require("lodash");

var incomes = function (collection) {
  var average = _.reduce(collection, function (sum, item) {
    return sum += item.income;
  }, 0) / collection.length;

  var underperform = _.filter(collection , function (item) {
    return item.income <= average;
  });

  var overperform = _.filter(collection, function (item) {
    return item.income > average;
  });

  return {
    average: average,
    underperform: _.sortBy(underperform, "income"),
    overperform: _.sortBy(overperform, "income")
  };

};

module.exports = incomes;