var Route = require('src/common/route');
var View = require('./composite-view');

module.exports = Route.extend({
  initialize: function(options) {
    console.log('route options', options);
    this.container = options.container;
    this.collection = options.collection;
  },

  fetch: function() {
    //if (this.collection.isNew()) {
      return this.collection.fetch();
    //}
  },

  render: function(params) {
    //var page = params && parseFloat(params.page) || 1;
    //this.collection.currentPage = page;

    this.view = new View({
      collection: this.collection
    });

    this.container.show(this.view);
  }
});
