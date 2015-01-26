/**
 * Recent Photography
 * @type {Marionette.ItemView|exports}
 */
var View = require('../../common/view');
var template = require('./template.hbs');

module.exports = View.extend({
  template: template,

  initialize: function () {
    this.collection.reset(this.collection.slice(0, 4));
    //this.collection.reset(this.collection.sample(4));
  },

  serializeData: function(){
    return {
      recentPhotography: this.collection.toJSON()
    };
  }
});
