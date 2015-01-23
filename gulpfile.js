var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserify = require('browserify');
var watchify = require('watchify');
var remapify = require('remapify');
var source = require('vinyl-source-stream');
var stylish = require('jshint-stylish');
var path = require('path');
var merge = require('merge-stream');
var buffer = require('vinyl-buffer');
var _ = require('lodash');

var browserSync = require('browser-sync');
var reload = browserSync.reload;

var api = require('./api/api');

var sassRuby = require('gulp-ruby-sass');
var minifyCSS = require('gulp-minify-css');

gulp.task('clean', function () {
  return gulp.src('app/tmp', {read: false})
    .pipe($.plumber())
    .pipe($.clean());
});

gulp.task('html', function () {
  return gulp.src('./src/index.html')
    .pipe($.plumber())
    .pipe(gulp.dest('./dist'));
});

gulp.task('fonts', function () {
  return gulp.src('./src/fonts/**/*')
    .pipe($.plumber())
    .pipe(gulp.dest('./dist/fonts'));
});

// minify new images
gulp.task('imagemin', function () {
  var imgSrc = './src/img/**/*', imgDst = './dist/img';
  gulp.src(imgSrc)
    .pipe($.changed(imgDst))
    .pipe($.imagemin())
    .pipe(gulp.dest(imgDst));
});


// using libsass. TODO: currently doesn't play well with SUSY2
//gulp.task('styles', function() {
//  return gulp.src('./src/scss/**/*.scss')
//    .pipe($.plumber())
//    .pipe($.sourcemaps.init())
//    .pipe($.sass({
//      sourceComments: false,
//      outputStyle: 'expanded'
//    }))
//    //.pipe($.rename('main.css'))
//    .pipe($.autoprefixer('last 2 version'))
//    .pipe($.sourcemaps.write('./'))
//    .pipe(gulp.dest('./dist'))
//    .pipe(reload({stream: true}));
//});


gulp.task('styles', function () {
  return gulp.src('./src/scss/*.scss')
    .pipe($.plumber())
    .pipe(sassRuby({
      compass: true
      //,
     // sourcemap: true,
     // sourcemapPath: '../scss'
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist'));
});


var bundler;
function getBundler() {
  if (!bundler) {
    bundler = watchify(browserify('./src/main.js', _.extend({debug: true}, watchify.args)));

    bundler.plugin(remapify, [{
      src: '**/*.js',
      expose: 'src',
      cwd: path.join(__dirname, 'src')
    }]);
  }
  return bundler;
}

function bundle() {
  return getBundler().bundle()
    .on('error', $.util.log)
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe($.sourcemaps.init({loadMaps: true}))
   // .pipe($.uglify())
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'))
    .pipe(reload({stream: true}));
}

gulp.task('scripts', function () {
  process.env.BROWSERIFYSWAP_ENV = 'dist';
  return bundle();
});

gulp.task('jshint', function () {
  return gulp.src(['./src/**/*.js', './test/**/*.js'])
    .pipe($.plumber())
    .pipe($.jshint())
    .pipe($.jshint.reporter(stylish));
});

var reporter = 'spec';

gulp.task('mocha', ['jshint'], function () {
  return gulp.src([
    './test/setup/node.js',
    './test/setup/helpers.js',
    './test/unit/**/*.js'
  ], {read: false})
    .pipe($.plumber())
    .pipe($.mocha({reporter: reporter}));
});

gulp.task('build', [
  'clean',
  'html',
  'fonts',
  'imagemin',
  'styles',
  'scripts',
  'test'
]);

gulp.task('test', [
  'jshint',
  'mocha'
]);

gulp.task('watch', ['build'], function () {
  browserSync({
    server: {
      baseDir: 'dist',
      middleware: function (req, res, next) {
        api(req, res, next);
      }
    }
  });

  reporter = 'dot';
  getBundler().on('update', function () {
    gulp.start('scripts');
    gulp.start('test');
  });
  gulp.watch('./test/**/*.js', ['test']);
  gulp.watch(['./src/scss/**/*.scss'], ['styles']);
});

gulp.task('default', ['watch']);
