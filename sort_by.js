var _ = require("lodash");

var sorter = function(collection) {
  return _.sortBy(collection, function(item) {
    return -item.quantity
  });
};

module.exports = sorter;