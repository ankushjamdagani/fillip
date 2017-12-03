var gulp = require('gulp');

gulp.task('move_assets', [], function() {
	console.log('Moving assets to respective platform folder....');

	gulp.src("app/assets/images/**.*")
      .pipe(gulp.dest('/android/app/src/main/assets/fonts'));
});