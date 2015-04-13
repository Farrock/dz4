var gulp            = require('gulp');
var concatCSS       = require('gulp-concat-css');
var minifyCSS       = require('gulp-minify-css');
var rename          = require('gulp-rename');
var autoprefixer    = require('gulp-autoprefixer');
var livereload      = require('gulp-livereload');
var connect         = require('gulp-connect');
var opn             = require('opn');

gulp.task('default', ['connect', 'html', 'css', 'watch']);

gulp.task('css', function () {
    return gulp.src('app/css/*.css')
        .pipe(concatCSS("bandle.css"))
        .pipe(autoprefixer())
        .pipe(minifyCSS(""))
        .pipe(rename("main.min.css"))
        .pipe(gulp.dest("app/css/dist/"))
        .pipe(connect.reload());
        ;
});



gulp.task('watch', function() {
    gulp.watch('app/css/*.css', ['css']);
    gulp.watch('app/*.html', ['html']);
});

gulp.task('html', function() {
    gulp.src('app/*.html')
        .pipe(connect.reload());
});


gulp.task('minify-css', function() {
    return gulp.src('app/css/*.css')
        .pipe(minifyCSS({keepBreaks:true}))
        .pipe(gulp.dest('dist/'))
});


gulp.task('connect', function() {
    connect.server({
        root: 'app',
        livereload: true,
        port:8888
    });
    opn('http://localhost:8888')
});
