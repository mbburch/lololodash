var _ = require ("lodash");

var filterWhere = function(list) {
  return _.where(list, { active: true })
};

module.exports = filterWhere;