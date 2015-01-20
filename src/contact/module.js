/**
 * Contact Module
 * @type {exports}
 */
var Radio = require('backbone.radio');
var Module = require('../common/module');
var Router = require('./router');

module.exports = Module.extend({
  initialize: function() {
    this.router = new Router(this.options);

    Radio.command('header', 'add', {
      name: 'Contact',
      path: 'contact',
      type: 'primary'
    });

    Radio.command('footer', 'add', {
      name: 'Contact',
      path: 'contact',
      type: 'primary'
    });
  }
});
