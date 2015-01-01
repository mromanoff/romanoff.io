/**
 * Contact Router
 * @type {exports}
 */

var Router = require('src/common/router');
var Radio = require('backbone.radio');
var IndexRoute = require('./route');

module.exports = Router.extend({
  initialize: function(options) {
    this.container = options.container;
  },

  onBeforeEnter: function() {
    Radio.command('header', 'activate', { path: 'contact' });
  },

  routes: {
    'contact': 'contact'
  },

  contact: function() {
    return new IndexRoute({
      container: this.container
    });
  }
});
