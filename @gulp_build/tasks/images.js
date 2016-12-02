var gulp = require('gulp');
var conf = require("../util/con.js");
var changed = require("gulp-changed");
var imagemin = require("gulp-imagemin");
// var fileSizeCheck = require("./plugins/fileSizeCheck");





gulp.task('images',function(){
  return gulp.src(conf.paths.src.img)
      .pipe(changed(conf.paths.dev.img)) // Ignore unchanged files
      .pipe(imagemin([imagemin.jpegtran(), imagemin.optipng(), imagemin.svgo()])) // Optimize
      // .pipe(fileSizeCheck(200 * 1024))
      .pipe(gulp.dest(conf.paths.dev.img));
});

//TODO 检测压缩后的图片，如果还是大于200*1024 需要提示。
