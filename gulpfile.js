const gulp = require("gulp"),
  fancylog = require("fancy-log"),
  browserSync = require("browser-sync"),
  server = browserSync.create(),
  dev_url = "http://localhost/starter-bootstrap";

/**
 * Define all source paths
 */

var paths = {
  styles: {
    src: "./assets/*.scss",
    customSCSSSrc: "./assets/sass/custom.scss",
    dest: "./assets/css",
    customDest: "./assets/css",
  },
  scripts: {
    src: "./assets/*.js",
    dest: "./assets/js",
  },
};

/**
 * Webpack compilation: http://webpack.js.org, https://github.com/shama/webpack-stream#usage-with-gulp-watch
 *
 * build_js()
 */

function build_js() {
  const compiler = require("webpack"),
    webpackStream = require("webpack-stream");

  return gulp
    .src(paths.scripts.src)
    .pipe(
      webpackStream(
        {
          config: require("./webpack.config.js"),
        },
        compiler
      )
    )
    .pipe(gulp.dest(paths.scripts.dest));
  /*.pipe(
			server.stream() // Browser Reload
		)*/
}

/**
 * SASS-CSS compilation: https://www.npmjs.com/package/gulp-sass
 *
 * build_css()
 */

function build_css() {
  const sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    sourcemaps = require("gulp-sourcemaps"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano");

  const plugins = [autoprefixer(), cssnano()];

  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(paths.styles.dest));
  /*.pipe(
			server.stream() // Browser Reload
		)*/
}

/**
 * SASS-CSS compilation: https://www.npmjs.com/package/gulp-sass
 *
 * build_custom_css()
 */

function build_custom_css() {
  const sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    sourcemaps = require("gulp-sourcemaps"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano");

  const plugins = [autoprefixer(), cssnano()];

  return gulp
    .src(paths.styles.customSCSSSrc)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(paths.styles.customDest));
  /*.pipe(
			server.stream() // Browser Reload
		)*/
}
/**
 * Run above functions on cmd
 */
gulp.task("build_css", build_css);

gulp.task("build_custom_css", build_custom_css);

/**
 * Watch task: Webpack + SASS
 *
 * $ gulp watch
 */

gulp.task("watch", function () {
  // Modify "dev_url" constant and uncomment "server.init()" to use browser sync
  /*server.init({
			proxy: dev_url,
		} );*/

  gulp.watch(paths.scripts.src, build_js);
  gulp.watch([paths.styles.src, "./assets/scss/*.scss"], build_css);
});
