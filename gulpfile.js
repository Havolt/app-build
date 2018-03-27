// Gulp.js configuration
var gulp = require('gulp'),
  minify = require('gulp-minify')

  // folders
  folder = {
    src: 'src/',
    build: 'build/'
  };

gulp.task('compress', function() {
gulp.src('src/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('build'))
})