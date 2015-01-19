/**
 * Overview Route
 * @type {exports}
 */

var $ = require('jquery');
var Route = require('src/common/route');

var HeroView = require('./hero/view');
var heroCollection = require('./hero/collection');

var WorkView = require('./work/view');
var WorkCollection = require('src/work/collection');

var PhotographyView = require('./photography/view');
var PhotographyCollection = require('src/photography/collection');

var CodeView = require('./code/view');
var CodeModel = require('./code/model');

module.exports = Route.extend({
  initialize: function (options) {
    this.layout = options.layout;
    this.heroCollection = heroCollection;
    this.workCollection = new WorkCollection();
    this.photographyCollection = new PhotographyCollection();
    this.codeModel = new CodeModel();
  },

  fetch: function () {
    //if (this.codeModel.isNew()) {
    //  this.codeModel.fetch();
    //}
    //
    //if (this.workCollection.isNew()) {
    //  this.workCollection.fetch();
    //}
    //
    //if (this.photographyCollection.isNew()) {
    //  this.photographyCollection.fetch();
    //}

    return $.when(
      this.codeModel.fetch(),
      this.workCollection.fetch(),
      this.photographyCollection.fetch()
    );
    // or with es6 Promises
    //return Promise.all([x.fetch(), y.fetch(), z.fetch()]);
  },

  //or sequentially:
  //fetch: function () {
  //  return x.fetch()
  //      .then(() => y.fetch())
  //.then(() => z.fetch());
  //},

  render: function () {

    this.hero = new HeroView({
      collection: this.heroCollection
    });

    this.work = new WorkView({
      collection: this.workCollection
    });


    this.photography = new PhotographyView({
      collection: this.photographyCollection
    });

    this.code = new CodeView({
      model: this.codeModel
    });

    this.layout.hero.show(this.hero);
    this.layout.work.show(this.work);
    this.layout.photography.show(this.photography);
    this.layout.code.show(this.code);
  }
});
