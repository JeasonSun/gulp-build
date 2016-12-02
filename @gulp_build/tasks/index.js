/**
 * tasks总入口
 */

var gulp = require("gulp");
var colors = require("colors");  //让终端输出有颜色
var gulpSequence = require('gulp-sequence');

/**
 * 任务清单
 * 1.default
 * 2.dev
 * 3.pro
 */


gulp.task('default',['dev']);

/**
 * 默认执行方式：dev
 * 流程：
 * delDev -> [styles]
 * 主要子任务：
 * 1.styles
 */

gulp.task('dev',gulpSequence(
  // 'delDev',
  [
    'styles',
    'images',
    'compileHtml',
    // 'copySlice',

  ]
));
