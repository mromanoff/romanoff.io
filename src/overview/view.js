var $ = require('jquery');
var View = require('src/common/view');
var template = require('./template.hbs');

module.exports = View.extend({
  template: template,
  className: 'overview',

  onShow: function () {
    this.$el.find('#owl-demo').owlCarousel({
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
    });
  }
});
