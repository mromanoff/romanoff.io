var Handlebars = require("hbsfy/runtime");
var pagination = require('handlebars-paginate');

Handlebars.registerHelper("upcase", function(s) {
  return s.toUpperCase();
});

Handlebars.registerHelper("lowcase", function(s) {
  return s.toLowerCase();
});

Handlebars.registerHelper('times', function(n, block) {
  var accum = '';
  for(var i = 0; i < n; i++) {
    accum += block.fn(i);
  }
  return accum;
});

Handlebars.registerHelper('for', function(from, to, increment, block) {
  var accum = '';
  for(var i = from; i < to; i += increment) {
    accum += block.fn(i);
  }
  return accum;
});

Handlebars.registerHelper('pagination', pagination);
