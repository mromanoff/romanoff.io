/***
 * Hero Item View
 * @type {Marionette.ItemView|exports}
 */
var View = require('../../common/view');
var template = require('./item-template.hbs');

module.exports = View.extend({
  template: template,
  className: 'item hero-item',

  serializeData: function () {
    return this.model.toJSON();
  }
});
