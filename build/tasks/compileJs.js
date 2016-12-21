var gulp = require("gulp");
var conf = require("../util/con.js");
var rename = require('gulp-rename');
var rev = require("gulp-rev");
var revCollector = require("gulp-rev-collector");


gulp.task("compileJs",function(){
  return gulp.src(conf.paths.src.js)
        .pipe(rev())
        .pipe(rename(function(file){
          if(file.extname == '.js'){
            file.basename += '.min';
            file.extname = ".js";
          }
        }))
        .pipe(gulp.dest(conf.paths.dev.js))
        .pipe(rev.manifest())
        .pipe(gulp.dest(conf.paths.dev.dir+'/rev/script'));

})
