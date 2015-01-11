/**
 * Photography Index Composite View
 * @type {exports}
 */

var $ = require('jquery');
var CompositeView = require('src/common/composite-view');
var ItemView = require('./item-view');
var template = require('./composite-template.hbs');

module.exports = CompositeView.extend({
  template: template,
  tagName: 'ul',

  ui: {
    sortPictures: '.sortBy'
  },

  events: {
    'click .sortBy a': 'sortPictures'
  },

  childView: ItemView,
  childViewContainer: '.gallery',

  templateHelpers: function () {
    var pageCount = this.collection.pageCount;
    var page = this.collection.page;

    return {
      pagination: {
        page: page,
        pageCount: pageCount
      }
    };
  },

  sortPictures: function (e) {
    e.preventDefault();
    var sort = $(e.currentTarget).data('sort-name');
    this.ui.sortPictures.find('li').removeClass('active');
    this.ui.sortPictures.find('a[data-sort-name="' + sort + '"]').closest('li').addClass('active');
    //TODO trigger route + keep page number
  }
});
