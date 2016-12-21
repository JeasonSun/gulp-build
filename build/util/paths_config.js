var expPath = function(root){
  var paths = {
      src: {
          dir: './src',
          img: root+'/src/img/**/*.{JPG,jpg,png,gif,svg}',
          slice: './src/slice/**/*.png',
          js: root+'/src/js/**/*.js',
          media: './src/media/**/*',
          less: './src/css/style-*.less',
          sass: root+'/src/styles/**/*.{css,scss}',
          html: [root+'/src/**/*.html'],
          htmlAll: './src/html/**/*',
          php: './src/**/*.php'
      },
      tmp: {
          dir: +'/tmp',
          css: root+'/tmp/styles/',
          img: './tmp/img',
          html: './tmp/html',
          sprite: './tmp/sprite',
          js: './tmp/js'
      },
      dist: {
          dir: root+'/dist',
          css: root+'/dist/css',
          img: './dist/img',
          html: './dist/html',
          sprite: './dist/sprite'
      },
      dev: {
          dir: root+'/dev',
          css: root+'/dev/css',
          html: root+'/dev',
          js: root+'/dev/js',
          img: root+'/dev/img'
      }
  };
  return paths;
}

module.exports = expPath;
