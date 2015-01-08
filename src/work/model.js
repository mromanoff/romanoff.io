/**
 * Work Model
 * @type {exports}
 */

var Model = require('src/common/model');

module.exports = Model.extend({
  //urlRoot: '/api/work',
  urlRoot: 'https://api.mongolab.com/api/1/databases/romanoff-io/collections/work?apiKey=oOfu-DRx8fwXi9VifYrwAwgJGCBXT1_n',

  defaults: {
    active: false
  }
});
