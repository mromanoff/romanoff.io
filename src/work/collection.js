/**
 * Work Collection
 * @type {exports}
 */

var Collection = require('src/common/collection');
var Model = require('./model');

module.exports = Collection.extend({
 // url: '/api/work',
  url: 'https://api.mongolab.com/api/1/databases/romanoff-io/collections/work?apiKey=oOfu-DRx8fwXi9VifYrwAwgJGCBXT1_n',
  model: Model
});
