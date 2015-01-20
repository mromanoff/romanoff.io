/**
 * Contact Model
 * @type {exports}
 */
var Model = require('../common/model');

var API = {
  url: 'https://api.mongolab.com/',
  version: 1,
  database: 'romanoff-io',
  collection: 'contact',
  key: 'oOfu-DRx8fwXi9VifYrwAwgJGCBXT1_n'
};

module.exports = Model.extend({
  url: API.Url + '/api/' + API.version + '/databases/' + API.database + '/collections/' + API.collection + '?apiKey=' + API.Key,

  defaults: {
    firstName: null,
    lastName: null,
    email: null,
    phone: null
  },

  validate: function (attrs) {
    var errors = [];

    if (attrs.firstName === '') {
      errors.push('Missing "First Name" field');
    }

    if (attrs.lastName === '') {
      errors.push('Missing "Last Name" field');
    }

    if (attrs.email === '') {
      errors.push('Missing "Email" field');
    }

    if (attrs.phone === '') {
      errors.push('Missing "Phone" field');
    }

    return errors.length > 0 ? errors : undefined;
  }
});
