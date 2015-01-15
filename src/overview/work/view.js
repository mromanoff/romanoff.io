var View = require('src/common/view');
var template = require('./template.hbs');
var Collection = require('src/work/collection');

module.exports = View.extend({
  template: template,
  className: 'module paragraph',

  initialize: function () {
    this.collection = new Collection();
    this.collection.fetch();
    this.start = 1;
    this.limit = 4;
  },

  templateHelpers: function () {
    return {
      recentWork: this.collection.toJSON()
    };
  }
});
