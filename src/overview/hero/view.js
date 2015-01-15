/***
  * Hero View
  * @type {Marionette.ItemView|exports}
 */
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

  serializeData: function(){
    return {
      images: this.collection.toJSON()
    }
  }
});
