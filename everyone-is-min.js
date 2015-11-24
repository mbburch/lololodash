var _ = require('lodash');

var townTemps = function (collection) {
  var result = {
    hot: [],
    warm: []
  };

  function hot (collection) {
    return collection > 19;
  };

  _.forEach(collection, function (town, name) {
    if (_.every(town, hot)) {
      result.hot.push(name);
    } else if (_.some(town, hot)) {
      result.warm.push(name);
    }
  });

  return result;
};

module.exports = townTemps;