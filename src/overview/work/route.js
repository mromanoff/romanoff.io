

var Route = require('src/common/route');
var View = require('./view');
var Collection = require('src/work/collection');


module.exports = Route.extend({
  initialize: function(options) {
    this.container = options.container;
    this.collection = new Collection();
  },

  fetch: function() {
    if (this.collection.isNew()) {
      return this.collection.fetch();
    }
  },

  render: function() {
    this.view = new View({
      collection: this.collection
    });
    this.container.show(this.view);
  }
});
