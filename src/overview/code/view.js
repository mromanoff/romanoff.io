/***
 * Code View
 * @type {Marionette.ItemView|exports}
 */

var _ = require('lodash');
var View = require('src/common/view');
var template = require('./template.hbs');

module.exports = View.extend({
  template: template,

  serializeData: function(){
    return {
      repos: _.first(this.model.toJSON().data, 6)
    };
  }
});
