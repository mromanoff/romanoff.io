/**
 * Work Collection
 * @type {exports}
 */

var Collection = require('src/common/collection');
var Model = require('./model');

module.exports = Collection.extend({
  model: Model,
  url: function () {
    return 'https://api.mongolab.com/api/1/databases/romanoff-io/collections/work?apiKey=oOfu-DRx8fwXi9VifYrwAwgJGCBXT1_n';
  }
});
