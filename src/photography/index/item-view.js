/**
 * Photography Index Item-View
 * @type {Marionette.ItemView|exports}
 */

var ItemView = require('../../common/item-view');
var template = require('./item-template.hbs');

module.exports = ItemView.extend({
  tagName: 'li',
  template: template
});
