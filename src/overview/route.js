/**
 * Overview Route
 * @type {exports}
 */
var Route = require('src/common/route');
var View = require('./view');
var RecentWorkCollection = require('src/work/collection');

//var GitHubCollection = require('./github/collection');
var GitHubModel = require('./github/model');


module.exports = Route.extend({
  initialize: function(options) {
    this.container = options.container;
    this.collection = new RecentWorkCollection();

    //this.gitHubCollection = new GitHubCollection();
    this.gitHubModel = new GitHubModel();
  },

  fetch: function() {
    //this.gitHubCollection.fetch();
    this.gitHubModel.fetch();

    if (this.collection.isNew()) {
      return this.collection.fetch();
    }
  },

  render: function() {
    this.view = new View({
      collection: this.collection,
      model: this.gitHubModel
    });
    this.container.show(this.view);
  }
});
