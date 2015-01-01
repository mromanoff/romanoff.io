/**
 * Work Index Item-View
 * @type {Marionette.ItemView|exports}
 */

var ItemView = require('src/common/item-view');
var template = require('./item-template.hbs');

module.exports = ItemView.extend({
  tagName: 'li',
  template: template
});
