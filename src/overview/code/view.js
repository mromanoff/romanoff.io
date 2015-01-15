/***
 * Code View
 * @type {Marionette.ItemView|exports}
 */
var View = require('src/common/view');
var template = require('./template.hbs');

module.exports = View.extend({
  template: template,

  serializeData: function(){
    return {
      repos: this.model.toJSON().data
    }
  }
});
