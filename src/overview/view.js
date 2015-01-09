/**
 * Overview View
 * @type {exports}
 * @private
 */


var _ = require('lodash');
var Collection = require('src/common/collection');
var View = require('src/common/view');
var template = require('./template.hbs');


module.exports = View.extend({
  template: template,
  className: 'overview',


  initialize: function (options) {
    this.models = options.collection.models;
    delete this.collection;
    this.start = 1;
    this.limit = 4;


    console.log('this model', this.model.attributes);

  },

  onBeforeRender: function() {
    var recent = _.chain(this.models)
      .drop(this.start)
      .take(this.limit)
      .value();
    this.collection = new Collection(recent);
  },

  onShow: function () {
    this.$el.find('#hero').owlCarousel({
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
    });
  },

  templateHelpers: function () {
    console.log('git hub model', this.model.toJSON().data);

    return {
      repos: this.model.toJSON().data,
      recentWork: this.collection.toJSON(),

      heroImages: [
        {
          small: '/img/hero/main-1-768x720.jpg',
          medium: '/img/hero/main-1-1280x600.jpg',
          large: '/img/hero/main-1-1920x700.jpg',
          alt: 'romanoff.io'
        },
        {
          small: '/img/hero/main-2-768x720.jpg',
          medium: '/img/hero/main-2-1280x600.jpg',
          large: '/img/hero/main-2-1920x700.jpg',
          alt: 'romanoff.io'
        }
        //,
        //{
        //  small: 'http://placehold.it/768x720/DB4105/FFF8E3&text=768w+720h',
        //  medium: 'http://placehold.it/1024x600/DB4105/FFF8E3&text=1280w+600h',
        //  large: 'http://placehold.it/1920x700/DB4105/FFF8E3&text=1920w+700h',
        //  alt: 'romanoff.io'
        //},
        //{
        //  small: 'http://placehold.it/768x720/33332D/FFF8E3&text=768w+720h',
        //  medium: 'http://placehold.it/1280x600/33332D/FFF8E3&text=1280w+600h',
        //  large: 'http://placehold.it/1920x700/33332D/FFF8E3&text=1920w+700h',
        //  alt: 'romanoff.io'
        //}
      ]
    };
  }
});
