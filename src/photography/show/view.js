/**
 * Photography Show View
 * @type {exports}
 */

var View = require('../../common/view');
var template = require('./template.hbs');

module.exports = View.extend({
  template: template,
  className: 'gallery',

  events: {
    'click .goBack': 'goBack'
  },

  goBack: function (e) {
    e.preventDefault();
    window.history.back();
  }
});
