/**
 * Photography Router
 * @type {exports}
 */

var Router = require('src/common/router');
var Radio = require('backbone.radio');

var Collection = require('./collection');
var IndexRoute = require('./index/route');
var ShowRoute = require('./show/route');

module.exports = Router.extend({
  initialize: function (options) {
    this.container = options.container;
    this.collection = new Collection();
  },

  onBeforeEnter: function () {
    Radio.command('header', 'activate', {path: 'photography'});
  },

  routes: {
    'photography': 'index',
    'colors/:id': 'show'
  },

  index: function () {
    return new IndexRoute({
      container: this.container,
      collection: this.collection
    });
  },

   show: function () {
    return new ShowRoute({
      container: this.container,
      collection: this.collection
    });
  }

 });
