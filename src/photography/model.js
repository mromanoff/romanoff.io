/**
 * Photography Model
 * @type {exports}
 */

var Model = require('src/common/model');

module.exports = Model.extend({
  defaults: {
    apiUrl: 'https://api.500px.com/v1/photos/',
    consumerKey: 'vRemLRvbgOrkPsJhzeoGdSNHiuC22aZ4TgwgXQXK',
    imageSize: 4,
    comments: 20
  },

  url: function () {
    return this.get('apiUrl') + this.get('id') + '?image_size=' + this.get('imageSize') + '&comments=' + this.get('comments') + '&consumer_key=' + this.get('consumerKey');
  }
});
