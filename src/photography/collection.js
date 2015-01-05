/**
 * Photography Collection
 * @type {exports}
 */
var Collection = require('src/common/collection');
var Model = require('./model');

module.exports = Collection.extend({
  model: Model,

  initialize: function () {
    this.apiUrl = 'https://api.500px.com/v1/photos';
    this.consumerKey = 'vRemLRvbgOrkPsJhzeoGdSNHiuC22aZ4TgwgXQXK';
    this.sdkKey = '10e2aea1742dcba191588e8bb86d9e7d3f63cdd5';
    this.userId = 678550;
    this.feature = 'user';
    this.rpp = 20; //— results to return. Can not be over 100, default 20.
    this.sort = 'created_at';
    this.sortDirection = 'desc'; // 'asc'
    this.imageSize = 4;
    this.page = 1;
    this.pageCount= null;
  },

  url: function () {
    return this.apiUrl + '?feature=' + this.feature + '&user_id=' + this.userId + '&sort=' + this.sort + '&image_size=' + this.imageSize + '&page=' + this.page + '&rpp=' + this.rpp + '&consumer_key=' + this.consumerKey;
  },

  parse: function(response) {
    this.pageCount = response.total_pages;
    return response.photos;
  }
});
