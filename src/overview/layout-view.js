/**
 * Overview Layout View
 * @type {exports}
 */


var LayoutView = require('../common/layout-view');
var template = require('./layout-template.hbs');

module.exports = LayoutView.extend({
  template: template,

  regions: {
    hero : '.hero-region',
    work: '.work-region',
    photography: '.photography-region',
    code: '.code-region'
  }
});
