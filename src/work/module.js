/**
 * Work Module
 * @type {exports}
 */

var Radio = require('backbone.radio');
var Module = require('src/common/module');
var Router = require('./router');

module.exports = Module.extend({
  initialize: function() {
    this.router = new Router(this.options);

    Radio.command('header', 'add', {
      name: 'Work',
      path: 'work',
      type: 'primary'
    });

    Radio.command('footer', 'add', {
      name: 'Work',
      path: 'work',
      type: 'primary'
    });
  }
});
