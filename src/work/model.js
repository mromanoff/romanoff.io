/**
 * Work Model
 * @type {exports}
 */

var _ = require('lodash');
var Model = require('src/common/model');

module.exports = Model.extend({
  //idAttribute: '_id',

  defaults: {
    visible: false,
    category: null,
    name: null,
    url: null,
    image: null,
    description:  null,
    information: null,
    client: [],
    apiKey: 'oOfu-DRx8fwXi9VifYrwAwgJGCBXT1_n',
    dataUrl: 'https://api.mongolab.com/api/1/databases/romanoff-io/collections/work/'
  },

  initialize: function () {
    // this is hack to deal with MongoLab _id object.
    if(!_.isUndefined(this.get('_id'))) {
      this.set({id: this.get('_id').$oid});
    }
  },

  url: function () {
    return this.get('dataUrl') + this.get('id') + '?apiKey=' + this.get('apiKey');
  }

});
