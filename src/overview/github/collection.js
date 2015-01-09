/**
 * Github collection
 * @type {exports}
 * @private
 */


var Collection = require('src/common/collection');


module.exports = Collection.extend({
  url: function() {
    return 'https://api.github.com/users/mromanoff/repos?callback=?';
  },

  comparator: function(repo) {
    return -new Date(repo.get('pushed_at'));
  }
});


