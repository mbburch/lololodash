var _ = require("lodash");

var greeting = function (collection) {

  return _.template('Hello' + ' ' + '<%= name %>' + ' ' + '(logins: <%= login.length %>)')(collection);
};

module.exports = greeting;