var View = require('src/common/view');
var template = require('./template.hbs');

module.exports = View.extend({
  template: template,
  className: 'owl-carousel owl-theme',

  onShow: function () {
    this.$el.owlCarousel({
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
    });
  },

  templateHelpers: function () {
    return {
      heroImages: [
        {
          small: '/img/hero/main-1-768x720.jpg',
          medium: '/img/hero/main-1-1280x600.jpg',
          large: '/img/hero/main-1-1920x700.jpg',
          extraLarge: '/img/hero/main-1-1920x700.jpg',
          alt: 'romanoff.io'
        },
        {
          small: '/img/hero/main-2-768x720.jpg',
          medium: '/img/hero/main-2-1280x600.jpg',
          large: '/img/hero/main-2-1920x700.jpg',
          extraLarge: '/img/hero/main-2-1920x700.jpg',
          alt: 'romanoff.io'
        }
      ]
    };
  }
});
