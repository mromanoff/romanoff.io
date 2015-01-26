Romanoff.io web site
=================

[![node](https://img.shields.io/node/v/gh-badges.svg?style=flat-square)](https://github.com/mromanoff/romanoff.io)
[![Bower](https://img.shields.io/bower/v/bootstrap.svg?style=flat-square)](https://github.com/mromanoff/romanoff.io)
[![David](https://img.shields.io/david/strongloop/express.svg?style=flat-square)](https://github.com/mromanoff/romanoff.io)
[![David](https://img.shields.io/david/dev/strongloop/express.svg?style=flat-square)]([![David](https://img.shields.io/david/strongloop/express.svg?style=flat-square)](https://github.com/mromanoff/romanoff.io))


## Project in working progress. ##

http://romanoff.io


### TODO: ###

This site build with:
FrontEnd: Backbone, Marionette, Underscore, jQuery, Gulp, Mocha, Sass, Susy, IcoMoon, Picturefill

Built in testing support for: Mocha with Chai.


## Documentation ##

View the Backbone here:
[GitHub Wiki](https://github.com/jashkenas/backbone/wiki)

View Backbone.Marionette:
[GitHub Wiki](https://github.com/marionettejs/backbone.marionette)

View Susy documentation here:
[GitHub Wiki](https://github.com/ericam/susy/wiki)

View IcoMoon documentation here:
[IcoMoon docs](http://icomoon.io/#docs)

View Picturefill project:
[GitHub] (https://github.com/scottjehl/picturefill)


## Bugs

Picturefill v. 2.2.0 have a bug and will be fixed in 2.3 release.
for now just change:
( this, this.document, new this.Image() );
to:
} )( window, window.document, new window.Image() );



## Updating dependencies ##

Third party packages may update independently from this main repo, so it's a
good idea to update after fetching.

``` bash
# Install dependencies.
npm install

bower install


## Build process ##

# To run the build process, run the default Gulp task.
gulp
```

## License ##
Copyright © 2015 Michael Romanoff
Licensed under the MIT license.
