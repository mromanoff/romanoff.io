/**
 * Contact Route
 * @type {exports}
 */

var Route = require('../common/route');
var View = require('./view');
var Model = require('./model');

module.exports = Route.extend({
  initialize: function(options) {
    this.model = new Model();
    this.container = options.container;
  },

  render: function() {
    this.view = new View({model: this.model});
    this.container.show(this.view);
  }
});
