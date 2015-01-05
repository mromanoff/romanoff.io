/**
 * Photography Model
 * @type {exports}
 */

var Model = require('src/common/model');

module.exports = Model.extend({
  urlRoot: '/api/photography',

  defaults: {
    //userId: userId,
    //feature: 'user',
    //sort: 'created_at',
    //sort_direction: 'desc', // 'asc'
    //page: 1,
    //rpp: 20, //— Results to return. Can not be over 100, default 20.
    //photos: null,
    //totalPages: null,
    //$container: $('#container'),
    //$pager: $('.pager'),
    //$sort: $('#sorts')
  }
});
