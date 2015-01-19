/**
 * Photography Model
 * @type {exports}
 */

var Model = require('src/common/model');

var API = {
  url: 'https://api.500px.com/v1/photos/',
  consumerKey: 'vRemLRvbgOrkPsJhzeoGdSNHiuC22aZ4TgwgXQXK',
  imageSize: 4,
  comments: 20
};

module.exports = Model.extend({

  url: function () {
    return API.url + this.get('id') + '?image_size=' + API.imageSize + '&comments=' + API.comments + '&consumer_key=' + API.consumerKey; // jshint ignore:line
  }
});
