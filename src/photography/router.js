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
    Radio.command('footer', 'activate', {path: 'photography'});
  },

  routes: {
    'photography': 'index',
    'photography/:id': 'show'
  },

  index: function (params) {
    //this.collection.sortBy = params && parseFloat(params.sortBy) || 'created_at';
    this.collection.page = params && parseFloat(params.page) || 1;

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
