/**
 * Photography Collection
 * @type {exports}
 */
var Collection = require('../common/collection');
var Model = require('../common/model');

var API = {
  url: 'https://api.500px.com/v1/photos',
  consumerKey: 'vRemLRvbgOrkPsJhzeoGdSNHiuC22aZ4TgwgXQXK',
  userId: 678550,
  feature: 'user',
  rpp: 24, // Can not be over 100, default 20. 12 and 24 best for grids.
  sort: 'highest_rating',  // 'created_at', times_viewed, votes_count, favorites_count,
  sortDirection: 'desc', // 'asc'
  imageSize: 3,
  page: 1,
  pageCount: null
};

module.exports = Collection.extend({
  model: Model,

  initialize: function () {
    this.page = API.page;
    this.pageCount = API.pageCount;
  },

  url: function () {
    return API.url + '?feature=' + API.feature + '&user_id=' + API.userId + '&sort=' + API.sort + '&image_size=' + API.imageSize + '&page=' + this.page + '&rpp=' + API.rpp + '&consumer_key=' + API.consumerKey; // jshint ignore:line
  },

  parse: function (response) {
    this.pageCount = response.total_pages; // jshint ignore:line
    return response.photos;
  }
});
