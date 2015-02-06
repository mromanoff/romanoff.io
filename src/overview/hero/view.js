/***
 * Hero View
 * @type {Marionette.ItemView|exports}
 */
var View = require('../../common/view');
var template = require('./template.hbs');

module.exports = View.extend({
  template: template,
  className: 'owl-carousel owl-theme',

  onShow: function () {
    this.$el.owlCarousel({
      navigation: true,
      slideSpeed: 500,
      paginationSpeed: 500,
      rewindSpeed: 1000,
      singleItem: true,
      autoPlay: true
    });
  },

  serializeData: function () {
    return {
      images: this.collection.toJSON()
    };
  }
});
