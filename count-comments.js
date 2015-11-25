var _ = require("lodash");

var counter = function (comments) {
  var result = [],
      group = _.groupBy(comments, "username");

  _.forEach(group, function (item, name) {
    result.push({
      username: name,
      comment_count: _.size(item)
    });
  });

  return _.sortBy(result, "comment_count").reverse();
}

module.exports = counter;