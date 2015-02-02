/**
 * Work Show View
 * @type {Marionette.ItemView|exports}
 */

var View = require('../../common/view');
var template = require('./template.hbs');
var GoBackBehavior = require('../../behaviors/go-back');

module.exports = View.extend({
  template: template,
  className: 'gallery',

  ui: {
    goBack: '.goBack'
  },

  behaviors: {
    GoBackBehavior: {
      behaviorClass: GoBackBehavior
    }
  }
});
