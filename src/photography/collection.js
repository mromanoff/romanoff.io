/**
 * Photography Collection
 * @type {exports}
 */
var Collection = require('src/common/collection');
var Model = require('./model');

module.exports = Collection.extend({
  url: '/api/photography',
  model: Model
});
