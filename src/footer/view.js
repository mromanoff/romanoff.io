var _ = require('lodash');
var View = require('../common/view');
var template = require('./template.hbs');

module.exports = View.extend({
  template: template,

  collectionEvents: {
    'all': 'render'
  },

  templateHelpers: function () {
    return {
      primaryItems: this.serializeWhere({type: 'primary'}),
      secondaryItems: this.serializeWhere({type: 'secondary'}),
      currentYear: new Date().getFullYear()
    };
  },

  serializeWhere: function (props) {
    return _.invoke(this.collection.where(props), 'toJSON');
  }
});
