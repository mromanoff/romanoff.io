var Route = require('src/common/route');
var View = require('./view');

module.exports = Route.extend({
  initialize: function(options) {
    this.container = options.container;
    this.model = options.model;
  },

  fetch: function(id) {
      this.model.set({ id: id }).fetch();
      return this.model.fetch();
  },

  render: function() {
    this.view = new View({
      model: this.model
    });
    this.container.show(this.view);
  }
});
