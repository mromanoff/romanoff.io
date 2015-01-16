/**
 * Overview Route
 * @type {exports}
 */

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
    if (this.codeModel.isNew()) {
      this.codeModel.fetch();
    }

    if (this.workCollection.isNew()) {
      return this.workCollection.fetch();
    }

    // if (this.photographyCollection.isNew()) {
    //this.photographyCollection.fetch();
    // }
  },


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
    //this.layout.photography.show(this.photography);
    this.layout.code.show(this.code);
  }
});
