var _ = require("lodash")

var chained = function(collection) {
  return _.chain(collection)
    .map(function(item) {
      return item + "chained";
    })
    .map(function(item) {
      return item.toUpperCase();
    })
    .sortBy()
    .value();
};

module.exports = chained;