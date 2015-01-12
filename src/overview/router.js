/**
 * Overview Router
 * @type {exports}
 */


var Router = require('src/common/router');
var Radio = require('backbone.radio');

var LayoutView = require('./layout-view');
//var Collection = require('./collection');

//var IndexRoute = require('./route');
var ShowRoute = require('./route');

module.exports = Router.extend({
  initialize: function (options) {
    this.container = options.container;
    //this.collection = new Collection();
  },

  onBeforeEnter: function () {
    this.layout = new LayoutView();
    this.container.show(this.layout);
    Radio.command('header', 'activate', {path: ''});
    Radio.command('footer', 'activate', {path: ''});
  },

  routes: {
    '': 'show'
  },

  //index: function () {
  //  return new IndexRoute({
  //    //collection: this.collection
  //    layout: this.layout
  //  });
  //}
  //,
  //
  show: function () {
    return new ShowRoute({
     // collection: this.collection,
      layout: this.layout
    });
  }
});


//
//var Router = require('src/common/router');
//var Radio = require('backbone.radio');
//var IndexRoute = require('./route');
//
//module.exports = Router.extend({
//  initialize: function(options) {
//    this.container = options.container;
//  },
//
//  onBeforeEnter: function() {
//    Radio.command('header', 'activate', { path: '' });
//    Radio.command('footer', 'activate', { path: '' });
//  },
//
//  routes: {
//    '': 'index'
//  },
//
//  index: function() {
//    return new IndexRoute({
//      container: this.container
//    });
//  }
//});
