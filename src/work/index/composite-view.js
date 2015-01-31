/**
 * Work Index Composite View
 * @type {exports}
 * @private
 */

var CompositeView = require('../../common/composite-view');
var ItemView = require('./item-view');
var template = require('./composite-template.hbs');

module.exports = CompositeView.extend({
  template: template,

  initialize: function(options) {

    // filter out NSFW (not safe for work)
    //this.collection.reset(this.collection.where({nsfw: false}));


    this.models = options.collection.models;
  },

  childView: ItemView,
  childViewContainer: '.gallery'
});
