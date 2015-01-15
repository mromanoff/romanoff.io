/**
 * Work Index Composite View
 * @type {exports}
 * @private
 */

var CompositeView = require('src/common/composite-view');
var ItemView = require('./item-view');
var template = require('./composite-template.hbs');

module.exports = CompositeView.extend({
  template: template,
  initialize: function(options) {
    this.models = options.collection.models;
  },

  childView: ItemView,
  childViewContainer: '.gallery'
});
