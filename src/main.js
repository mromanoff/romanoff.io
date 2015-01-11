require('./plugins');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

// start the marionette inspector
if (window.__agent) {
  window.__agent.start(Backbone, Marionette);
}

var Application = require('src/application/application');

var app = new Application();

app.module('modal', {
  moduleClass: require('src/modal/module'),
  container: app.layout.overlay
});

app.module('header', {
  moduleClass: require('src/header/module'),
  container: app.layout.header
});

app.module('footer', {
  moduleClass: require('src/footer/module'),
  container: app.layout.footer
});

app.module('flashes', {
  moduleClass: require('src/flashes/module'),
  container: app.layout.flashes
});

app.module('overview', {
  moduleClass: require('src/overview/module'),
  container: app.layout.content
});

app.module('work', {
  moduleClass: require('src/work/module'),
  container: app.layout.content
});

app.module('photography', {
  moduleClass: require('src/photography/module'),
  container: app.layout.content
});

app.module('contact', {
  moduleClass: require('src/contact/module'),
  container: app.layout.content
});


Backbone.history.start();
