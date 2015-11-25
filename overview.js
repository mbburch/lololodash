var _ = require("lodash")

var quantities = function (collection) {
  var quantity = [];
  var total = 0;

  var orders = _.groupBy(collection, "article");

  _.forEach(orders, function (item, key) {
    key = parseInt(key);
    total = 0;

    if (item.length === 1) {
      total = item[0].quantity;
    } else {
      total = _.reduce(item, function (sum, item) {
        return sum + item.quantity;
      }, 0);
    }

    quantity.push({
      article: key,
      total_orders: total
    });

  });

  quantity = _.sortBy(quantity, "total_orders").reverse();
  return quantity;
};

module.exports = quantities;