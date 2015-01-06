var View = require('src/common/view');
var template = require('./template.hbs');

module.exports = View.extend({
  template: template,
  className: 'overview',

  onShow: function () {
    this.$el.find('#hero').owlCarousel({
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
      // 'singleItem:true' is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
    });
  },

  templateHelpers: function () {
    return {
      heroImages: [
        {
          small: '/img/hero/main-1-768x720.jpg',
          medium: '/img/hero/main-1-1280x600.jpg',
          large: '/img/hero/main-1-1920x700.jpg',
          alt: 'Okgrafix.com'
        },
        {
          small: '/img/hero/main-2-768x720.jpg',
          medium: '/img/hero/main-2-1280x600.jpg',
          large: '/img/hero/main-2-1920x700.jpg',
          alt: 'Okgrafix.com'
        },
        {
          small: 'http://placehold.it/768x720/DB4105/FFF8E3&text=768w+720h',
          medium: 'http://placehold.it/1024x600/DB4105/FFF8E3&text=1280w+600h',
          large: 'http://placehold.it/1920x700/DB4105/FFF8E3&text=1920w+700h',
          alt: 'Okgrafix.com'
        },
        {
          small: 'http://placehold.it/768x720/33332D/FFF8E3&text=768w+720h',
          medium: 'http://placehold.it/1280x600/33332D/FFF8E3&text=1280w+600h',
          large: 'http://placehold.it/1920x700/33332D/FFF8E3&text=1920w+700h',
          alt: 'Okgrafix.com'
        }
      ]
    };
  }




});
