/**
 * Contact Model
 * @type {exports}
 */
var Model = require('src/common/model');

module.exports = Model.extend({
  url: 'https://api.mongolab.com/api/1/databases/romanoff-io/collections/contact?apiKey=oOfu-DRx8fwXi9VifYrwAwgJGCBXT1_n',

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
