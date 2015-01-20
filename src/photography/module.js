/**
 * Photography Module
 * @type {exports}
 */

var Radio = require('backbone.radio');
var Module = require('../common/module');
var Router = require('./router');

module.exports = Module.extend({
  initialize: function() {
    this.router = new Router(this.options);

    Radio.command('header', 'add', {
      name: 'Photography',
      path: 'photography',
      type: 'primary'
    });

    Radio.command('footer', 'add', {
      name: 'Photography',
      path: 'photography',
      type: 'primary'
    });
  }
});
