var _ = require('lodash');
var $ = require('jquery');
var CompositeView = require('src/common/composite-view');
var Collection = require('src/common/collection');
var ItemView = require('./item-view');
var template = require('./composite-template.hbs');

module.exports = CompositeView.extend({
  template: template,

  initialize: function () {
    console.log('this collection', this.collection);
  },

  ui: {
    sortPictures: '.sortBy'
  },

  events: {
    'click .sortBy a': 'sortPictures'
  },

  childView: ItemView,
  childViewContainer: 'ul.category',

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
    console.log('sort clicked');
    var sort = $(e.currentTarget).data('sort-name');
    this.ui.sortPictures.find('li').removeClass('active');
    this.ui.sortPictures.find('a[data-sort-name="' + sort + '"]').closest('li').addClass('active');
    //TODO trigger route + keep page number
  }
});
