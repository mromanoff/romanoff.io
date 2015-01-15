///**
// * Photography Index Route
// * @type {exports}
// */
//
//var Route = require('src/common/route');
//var View = require('./view');
//var Collection  = require('./collection');
//
//module.exports = Route.extend({
//  initialize: function(options) {
//    this.layout = options.layout;
//    this.collection = new Collection();
//  },
//
//  fetch: function() {
//    if (this.collection.isNew()) {
//      return this.collection.fetch();
//    }
//  },
//
//  render: function() {
//    this.view = new View({
//      collection: this.collection
//    });
//
//    this.layout.code.show(this.view);
//  }
//});
