var _ = require('lodash');
var $ = require('jquery');
var Backbone = require('backbone');
var View = require('src/common/view');
var template = require('./template.hbs');

module.exports = View.extend({
  template: template,

  collectionEvents: {
    'all': 'render'
  },

  templateHelpers: function () {
    return {
      primaryItems: this.serializeWhere({type: 'primary'}),
      secondaryItems: this.serializeWhere({type: 'secondary'})
    };
  },

  serializeWhere: function (props) {
    return _.invoke(this.collection.where(props), 'toJSON');
  },

  ui: {
    collapse: '#navbar-collapse',
    closeIcon: '.icon-close',
    menu: '.menu',
    nav: 'nav.main'

  },

  initialize: function () {
    _.bindAll(this, 'navTranslucent');
    $(window).scroll(this.navTranslucent);
  },

  events: {
    'click .menu': 'toggleMenu',
    'click .icon-close': 'closeMenu'
  },

  // On Scroll, make the nav translucent.
  navTranslucent: function () {
    if ($(window).scrollTop() > this.ui.nav.height()) {
      this.ui.nav.addClass('active');
    } else {
      this.ui.nav.removeClass('active');
    }
  },

  toggleMenu: function (e) {
    e.preventDefault();
    this.ui.menu.toggleClass('is-hidden');
    this.ui.closeIcon.toggleClass('is-hidden');
    this.ui.nav.addClass('open-links');

    $('body').on('touchmove', function (e) {
      e.preventDefault();
    });

    setTimeout(function () {
      window.scrollTo(1, 1);
    }, 5);
  },

  closeMenu: function (e) {
    e.preventDefault();
    this.ui.closeIcon.toggleClass('is-hidden');
    this.ui.menu.toggleClass('is-hidden');
    this.ui.nav.removeClass('open-links');

    $('body').off('touchmove');
  },

  onCollapseShow: function () {
    this.listenToOnce(Backbone.history, 'route', function () {
      this.ui.collapse.collapse('hide');
    });
  }
});

//
//
//define(function (require, exports, module) {
//  'use strict';
//
//  var $ = require('jquery');
//
//  module.exports = function ($el) {
//
//    $el.find('.menu').on('click', function (e) {
//      e.preventDefault();
//
//      $(this).toggleClass('is-hidden');
//      $('nav.main-transparent .icon-close').toggleClass('is-hidden');
//
//      $('nav.main').addClass('open-links');
//
//      $('body').on('touchmove', function (e) {
//        e.preventDefault();
//      });
//
//      // Fix #DPLAT-695
//      setTimeout(function () {
//        window.scrollTo(1, 1);
//      }, 5);
//    });


//    $el.find('.icon-close').on('click', function (e) {
//      e.preventDefault();
//
//      $(this).toggleClass('is-hidden');
//      $('nav.main-transparent .menu').toggleClass('is-hidden');
//
//      $('nav.main').removeClass('open-links');
//
//      $('body').off('touchmove');
//    });
//
//    // On Scroll, make the nav translucent.
//    $(window).on('scroll', function () {
//      if ($(window).scrollTop() > $('nav.main').height()) {
//        $('nav.main').addClass('active');
//      } else {
//        $('nav.main').removeClass('active');
//      }
//    });
//
//    // fix for ipad position fixed on keyboard focus
//    $('input').on('focus', function () {
//      $('nav.main').css({position: 'absolute'});
//    });
//
//    $('input').on('blur', function () {
//      $('nav.main').css({position: 'fixed'});
//    });
//
//  };
//});
