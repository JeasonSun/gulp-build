var gulp = require('gulp');
var conf = require("../util/con.js");


gulp.task('compileHtml',function(){
  return gulp.src(conf.paths.src.html)
            .pipe(gulp.dest(conf.paths.dev.html))
})
