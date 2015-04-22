/**
 * Overview Module
 * @type {exports}
 */

var Radio = require('backbone.radio');
var Module = require('../common/module');
var Router = require('./router');

module.exports = Module.extend({
  initialize: function () {
    this.router = new Router(this.options);

    Radio.command('footer', 'add', {
      name: 'Home',
      path: '/',
      type: 'primary'
    });
  }
});
