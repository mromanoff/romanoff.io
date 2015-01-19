/**
 * Recent Work View
 * @type {Marionette.ItemView|exports}
 */
var View = require('src/common/view');
var template = require('./template.hbs');

module.exports = View.extend({
  template: template,

  initialize: function () {
    console.log('this collection', this.collection.toJSON());

    this.collection.reset(this.collection.first(4));
  },

  serializeData: function(){
    return {
      recentWork: this.collection.toJSON()
    }
  }
});
