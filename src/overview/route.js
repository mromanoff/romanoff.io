/**
 * Overview Route
 * @type {exports}
 */

var $ = require('jquery');
var Route = require('../common/route');
var HeroView = require('./hero/composite-view');
var WorkView = require('./work/view');
var PhotographyView = require('./photography/view');
var CodeView = require('./code/view');

module.exports = Route.extend({
  initialize: function (options) {
    this.layout = options.layout;
    this.heroCollection = options.heroCollection;
    this.workCollection = options.workCollection;
    this.photographyCollection = options.photographyCollection;
    this.codeCollection = options.codeCollection;
  },

  fetch: function () {
    return $.when(
      this.codeCollection.fetch(),
      this.workCollection.fetch(),
      this.photographyCollection.fetch()
    );
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
      collection: this.codeCollection
    });

    this.layout.hero.show(this.hero);
    this.layout.work.show(this.work);
    this.layout.photography.show(this.photography);
    this.layout.code.show(this.code);
  }
});
