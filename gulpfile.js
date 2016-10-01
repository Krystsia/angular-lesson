var gulp = require('gulp'),
		sass = require('gulp-sass');

gulp.task('sass', function() {
		return gulp.src('./styles/scss/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./styles/css/'));
});

gulp.task('watch', function() {
	gulp.watch('styles/scss/*.scss', ['sass']);
});
