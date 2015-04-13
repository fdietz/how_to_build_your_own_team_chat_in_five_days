var gulp         = require('gulp');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
  gulp.src('styles/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass({ style: 'expanded' }))
      .pipe(autoprefixer('last 2 version'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('styles'))
});

gulp.task('watch', function(){
  gulp.watch('./styles/**/*.scss', ['styles']);
});

gulp.task('build', ['styles']);

gulp.task('default', ['build', 'watch']);
