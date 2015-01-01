/**
 * Layout View
 * @type {Marionette.LayoutView|exports}
 */


var LayoutView = require('src/common/layout-view');
var template = require('./layout-template.hbs');

module.exports = LayoutView.extend({
  el: '#page',
  template: template,

  regions: {
    header: '.header-region',
    flashes: '.flashes-region',
    overlay: '.overlay-region',
    content: '.main-region',
    footer: '.footer-region'
  }
});
