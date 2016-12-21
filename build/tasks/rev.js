var gulp = require("gulp");
var conf = require("../util/con.js");
var revCollector = require("gulp-rev-collector");

gulp.task("rev",['rev-css'],function(){
  return gulp.src([conf.paths.dev.dir+"/rev/**/*.json",conf.paths.dev.dir+"/**/*.html"])
          .pipe(revCollector({
            replaceReved:true,
            revSuffix:'-[0-9a-f]{8,10}-?.min'
          }))
          .pipe(gulp.dest(conf.paths.dev.dir))

});

gulp.task("rev-css",function(){
  return gulp.src([conf.paths.dev.dir+"/rev/**/*.json",conf.paths.dev.css+"/**/*.css"])
          .pipe(revCollector({
            replaceReved:true
          }))
          .pipe(gulp.dest(conf.paths.dev.css))
});
