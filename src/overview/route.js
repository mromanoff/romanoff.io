/**
 * Overview Route
 * @type {exports}
 */

var Route = require('src/common/route');
var HeroView = require('./hero/view');
var WorkView  = require('./work/view');
//var PhotographyView  = require('../photography/view');
//var CodeView  = require('../code/view');

module.exports = Route.extend({
  initialize: function(options) {
    this.layout = options.layout;
   // this.collection = options.collection;
  },

  //fetch: function() {
  //  if (this.collection.isNew()) {
  //    return this.collection.fetch();
  //  }
  //},

  //onFetch: function(id) {
  //  this.model = this.collection.get(id);
  //  this.collection.active = this.model;
  //},

  render: function() {

    this.hero = new HeroView();
    this.work = new WorkView();

    //this.library = new LibraryView({
    //  collection: this.collection
    //});
    //
    //this.viewer = new ViewerView({
    //  model: this.model
    //});

    this.layout.hero.show(this.hero);
    this.layout.work.show(this.work);
    //this.layout.photography.show(this.photography);
    //this.layout.code.show(this.code);
  }
});




//var Route = require('src/common/route');
//var View = require('./view');
//var RecentWorkCollection = require('src/work/collection');
//var RecentPhotographyCollection = require('src/photography/collection');
//
////var GitHubCollection = require('./github/collection');
//var GitHubModel = require('./github/model');
//
//
//module.exports = Route.extend({
//  initialize: function(options) {
//    this.container = options.container;
//    this.collection = new RecentWorkCollection();
//
//    //this.gitHubCollection = new GitHubCollection();
//    this.gitHubModel = new GitHubModel();
//  },
//
//  fetch: function() {
//    //this.gitHubCollection.fetch();
//    this.gitHubModel.fetch();
//
//    if (this.collection.isNew()) {
//      return this.collection.fetch();
//    }
//  },
//
//  render: function() {
//    this.view = new View({
//      collection: this.collection,
//      model: this.gitHubModel
//    });
//    this.container.show(this.view);
//  }
//});
