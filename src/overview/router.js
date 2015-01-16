/**
 * Overview Router
 * @type {exports}
 */

var Router = require('src/common/router');
var Radio = require('backbone.radio');

var LayoutView = require('./layout-view');
var IndexRoute = require('./route');

module.exports = Router.extend({
  initialize: function (options) {
    this.container = options.container;
  },

  onBeforeEnter: function () {
    this.layout = new LayoutView();
    this.container.show(this.layout);
    Radio.command('header', 'activate', {path: ''});
    Radio.command('footer', 'activate', {path: ''});
  },

  routes: {
    '': 'index'
  },

  index: function () {
    return new IndexRoute({
      layout: this.layout
    });
  }
});
