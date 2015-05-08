/***
 * Code View
 * @type {Marionette.ItemView|exports}
 */

var _ = require('lodash');
var View = require('../../common/view');
var template = require('./template.hbs');

module.exports = View.extend({
    template: template,

    serializeData: function () {
        return {
            repos: _.slice(this.collection.toJSON(), 0, 5)
        };
    }
});
