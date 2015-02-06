/**
 * Overview Hero Composite View
 * @type {exports}
 * @private
 */

var CompositeView = require('../../common/composite-view');
var ItemView = require('./item-view');
var template = require('./composite-template.hbs');

module.exports = CompositeView.extend({
  template: template,

  childView: ItemView,
  childViewContainer: '.carousel',

  ui: {
    carousel: '.carousel',
    next: '.next',
    prev: '.prev'
  },

  events: {
    'click .next': 'showNext',
    'click .prev': 'showPrev'
  },

  onShow: function () {
    this.ui.carousel.owlCarousel({
      slideSpeed: 500,
      paginationSpeed: 500,
      rewindSpeed: 1000,
      singleItem: true,
      autoPlay: true
    });
  },

  showNext: function () {
    this.ui.carousel.trigger('owl.next');
  },

  showPrev: function () {
    this.ui.carousel.trigger('owl.prev');
  }

});
