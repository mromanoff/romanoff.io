var _ = require('lodash');
var $ = require('jquery');
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
    this.$body = $(document.body);
    $(window).scroll(this.navTranslucent);
  },

  events: {
    'click .menu': 'openMenu',
    'click .icon-close': 'closeMenu'
  },

  // On Scroll, make the nav translucent.
  navTranslucent: function () {
    if (this.$body.scrollTop() > this.ui.nav.height()) {
      this.ui.nav.addClass('active');
    } else {
      this.ui.nav.removeClass('active');
    }
  },

  openMenu: function (e) {
    e.preventDefault();
    this.ui.menu.addClass('is-hidden');
    this.ui.closeIcon.removeClass('is-hidden');
    this.ui.nav.addClass('open-links');
    this.disableTouchEvent();
  },

  closeMenu: function (e) {
    e.preventDefault();
    this.ui.menu.removeClass('is-hidden');
    this.ui.closeIcon.addClass('is-hidden');
    this.ui.nav.removeClass('open-links');
    this.enableTouchEvent();
  },

  disableTouchEvent: function () {
    this.$body.on('touchmove', function (e) {
      e.preventDefault();
    });
  },

  enableTouchEvent: function () {
    this.$body.off('touchmove');
  }
});
