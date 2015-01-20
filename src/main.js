require('./plugins');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

// start the marionette inspector
if (window.__agent) {
  window.__agent.start(Backbone, Marionette);
}

var Application = require('./application/application');

var app = new Application();

//app.module('modal', {
//  moduleClass: require('./modal/module'),
//  container: app.layout.overlay
//});

app.module('header', {
  moduleClass: require('./header/module'),
  container: app.layout.header
});

app.module('footer', {
  moduleClass: require('./footer/module'),
  container: app.layout.footer
});

app.module('flashes', {
  moduleClass: require('./flashes/module'),
  container: app.layout.flashes
});

app.module('overview', {
  moduleClass: require('./overview/module'),
  container: app.layout.content
});

app.module('work', {
  moduleClass: require('./work/module'),
  container: app.layout.content
});

app.module('photography', {
  moduleClass: require('./photography/module'),
  container: app.layout.content
});

app.module('contact', {
  moduleClass: require('./contact/module'),
  container: app.layout.content
});


Backbone.history.start();
