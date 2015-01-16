/**
 * Recent Photography
 * @type {Marionette.ItemView|exports}
 */
var View = require('src/common/view');
var template = require('./template.hbs');

module.exports = View.extend({
  template: template,
  className: 'module paragraph',

  initialize: function () {
    this.collection.reset(this.collection.first(4));
  },

  serializeData: function(){
    return {
      recentPhotography: this.collection.toJSON()
    }
  }
});
