var gulp = require("gulp");
var conf = require("../util/con.js");
var del = require('del');



// 清除 dist 目录
gulp.task("delDist",function(){
  return del([conf.paths.dist.dir]);
})

// 清除 tmp 目录
gulp.task('delTmp',function(){
  return del([conf.paths.tmp.dir]);
})

// 清除 dev 目录
gulp.task('delDev',function(){
  return del([conf.paths.dev.dir]);
})
