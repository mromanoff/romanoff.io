/**
 * Photography Model
 * @type {exports}
 */

//var Model = require('src/common/model');
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  url: function() {
    return 'https://api.github.com/users/mromanoff/repos?sort=updated&access_token=41be95208e904343cad9c9bdb7ba8e7f8de39841&callback=?';
  }
});
