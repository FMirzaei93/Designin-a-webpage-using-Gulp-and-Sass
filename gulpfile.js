const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('sass', async function() {

    gulp.src('styles/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('styles/scss-to-css'))
        .pipe(browserSync.stream());
});

gulp.task('browserSyncInit', function() {

    browserSync.init({
        server: {
            baseDir: './'
                // It means here(in this folder)
        }
    })
});

function reload() {
    browserSync.reload();
}

gulp.task('watch', async function() {
    gulp.series('browserSyncInit')();
    gulp.watch('styles/scss/style.scss', gulp.series('sass'), reload);
    gulp.watch('*.html', reload);
    gulp.watch('*.js', reload);
});

gulp.task('watch-sass', function() {
    gulp.watch('styles/scss/style.scss', gulp.series('sass'));
});