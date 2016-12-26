var gulp = require("gulp");
var babel = require("gulp-babel");
var watch = require('gulp-watch');


gulp.task("default", () => {
  return gulp.src('src/app.js')
    .pipe(babel({
      presets: ['babel-preset-latest']
    }))
    .pipe(gulp.dest('dist'))
});
