var _ = require('lodash');
var View = require('src/common/view');
var template = require('./template.hbs');
var Collection = require('src/work/collection');

module.exports = View.extend({
  template: template,
  className: 'module paragraph',

  initialize: function () {
    this.collection = new Collection();
    this.collection.fetch();
    //delete this.collection;
    this.start = 1;
    this.limit = 4;
  },

  //onBeforeRender: function() {
  //  var recent = _.chain(this.models)
  //    .drop(this.start)
  //    .take(this.limit)
  //    .value();
  //  this.collection = new Collection(recent);
  //  this.collection.fetch();
  //},


  templateHelpers: function () {

    console.log('col', this.collection.toJSON());
    return {
      recentWork: this.collection.toJSON()
    };
  }
});
