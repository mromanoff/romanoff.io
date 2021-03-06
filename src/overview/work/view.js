/**
 * Recent Work View
 * @type {Marionette.ItemView|exports}
 */
var View = require('../../common/view');
var template = require('./template.hbs');

module.exports = View.extend({
  template: template,

  initialize: function () {
    this.collection.reset(this.collection.slice(0, 4));
  },

  serializeData: function(){
    return {
      recentWork: this.collection.toJSON()
    };
  }
});
