/**
 * Overview Route
 * @type {exports}
 */

var Route = require('src/common/route');

var HeroView = require('./hero/view');
var heroCollection = require('./hero/collection');

var WorkView  = require('./work/view');
var WorkCollection = require('src/work/collection');

var CodeView  = require('./code/view');
//var CodeCollection  = require('./code/collection');
var CodeModel =  require('./code/model');
//var CodeRoute = require('./code/route');

module.exports = Route.extend({
  initialize: function(options) {
    this.layout = options.layout;
    this.heroCollection = heroCollection;
    this.workCollection = new WorkCollection();
    //this.codeCollection = new CodeCollection();
    this.codeModel = new CodeModel();
  },

  fetch: function() {
    if (this.codeModel.isNew()) {
      this.codeModel.fetch();
    }

    if (this.workCollection.isNew()) {
      return this.workCollection.fetch();
    }
  },


  render: function() {

    this.hero = new HeroView({
      collection: this.heroCollection
    });

    this.work = new WorkView({
      collection: this.workCollection
    });

    this.code = new CodeView({
      model: this.codeModel
    });


    this.layout.hero.show(this.hero);
    this.layout.work.show(this.work);
    //this.layout.photography.show(this.photography);
    this.layout.code.show(this.code);
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
