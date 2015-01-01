/**
 * Work Show View
 * @type {Marionette.ItemView|exports}
 */

var View = require('src/common/view');
var template = require('./template.hbs');

module.exports = View.extend({
  template: template,
  className: 'work work--show container',

  initialize: function (options) {
    this.model = options.model;
    this.model.cleanup();
  },

  modelEvents: {
    'all': 'render'
  }
});
