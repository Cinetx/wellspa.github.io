
var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require("autoprefixer");
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var stream = browserSync.stream;

  gulp.task('style', function (done) {
    gulp.src('./scss/style.scss')
      .pipe(plumber())
      .pipe(sass())
      .pipe(postcss([
        autoprefixer()
      ]))
      .pipe(gulp.dest('./css/'))
  .pipe(browserSync.stream());
    done();
  });


gulp.task('serve', function () {

  browserSync.init({
    server: {
      baseDir: "./"

    }

  });

  gulp.watch("*.html",  gulp.parallel('style')).on("change", reload);
  gulp.watch("./scss/*/*.scss",  gulp.parallel('style')).on("change", stream);
  gulp.watch("./scss/*.scss",  gulp.parallel('style')).on("change", stream);
  // gulp.watch("./slick/*.css",  gulp.parallel('style')).on("change", reload);

  // gulp.watch("./css/*.css").on("change", reload);

});
