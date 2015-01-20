/**
 * Photography Model
 * @type {exports}
 */

//var Model = require('../common/model');
var Backbone = require('backbone');

var API = {
  url: 'https://api.github.com/users/mromanoff/repos',
  sort: 'updated',
  token: '41be95208e904343cad9c9bdb7ba8e7f8de39841'
};

module.exports = Backbone.Model.extend({
  url: function() {
    return API.url + '?sort=' + API.sort + '&access_token=' + API.token + '&callback=?';
  }
});
