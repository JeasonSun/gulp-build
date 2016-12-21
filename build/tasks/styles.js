var gulp = require('gulp');
var conf = require("../util/con.js");
var postcss = require('gulp-postcss');  // CSS 预处理
var postcssPxtorem = require('postcss-pxtorem'); // 转换 px 为 rem
var postcssAutoprefixer = require('autoprefixer');
var sass = require('gulp-sass');
var concat = require("gulp-concat");
var sourcemaps = require("gulp-sourcemaps");
var rename = require('gulp-rename');
var rev = require("gulp-rev");
var revCollector = require("gulp-rev-collector");


var postcssOption = [];

if(conf.projectConfig.supportREM){
  postcssOption = [
    postcssAutoprefixer({browsers:['last 5 versions']}),
    postcssPxtorem({
      root_value: '75', // 基准值 html{ font-zise: 75px; }
      prop_white_list: [], // 对所有 px 值生效
      minPixelValue: 2 // 忽略 1px 值
    })
  ]
}else{
  postcssOption = [
    postcssAutoprefixer({browsers:['last 5 versions']})
  ]
}

gulp.task("styles",function(){
  return gulp.src(conf.paths.src.sass)
            .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'expanded'}))
            .on("error",sass.logError)
            .pipe(postcss(postcssOption))
            .pipe(sourcemaps.write('./.maps/'))
            .pipe(rev())
            .pipe(rename(function(file){
              if(file.extname == '.css'){
                file.basename += '.min';
                file.extname = ".css";
              }
            }))
            .pipe(gulp.dest(conf.paths.dev.css))
            .pipe(rev.manifest())
            .pipe(gulp.dest(conf.paths.dev.dir+'/rev/styles'));

});
