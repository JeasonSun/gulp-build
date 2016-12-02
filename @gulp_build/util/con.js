var argv = require('yargs').argv;
var fs = require("fs");
var path = require("path");
var expPath = require('./paths_config.js');

var TASK_SERVE = 'serve';
var TASK_DEV = 'dev';
var TASK_BETA = 'beta';
var TASK_TEST = 'test';
var TASK_PROD = 'prod';
var TASK_TYPES = {
    TASK_SERVE: TASK_SERVE,
    TASK_DEV: TASK_DEV,
    TASK_BETA: TASK_BETA,
    TASK_TEST: TASK_TEST,
    TASK_PROD: TASK_PROD
};

var ba = {
    isServe: false,
    isDev: false,
    isBeta: false,
    isProd: false,
    isTest: false,
    currentMode: TASK_SERVE,
    TASK_TYPES: TASK_TYPES
};

var _ = argv._;
var gt = _[0] || 'serve';
gt = gt.split(':');
gt = {
    main: gt[0],
    sub: gt[1]
};

switch (gt.main) {
case TASK_SERVE:
    ba.isServe = true;
    break;
case TASK_DEV:
    ba.isDev = true;
    break;
case TASK_BETA:
    ba.isBeta = true;
    break;
case TASK_TEST:
    ba.isTest = true;
    break;
case TASK_PROD:
    ba.isProd = true;
    break;
default:
    ba.isServe = true;
}
ba.currentMode = gt.main;

/**
 * 是否打开hybrid mock
 */
if (ba.isServe) {
    ba.isHybridMock = true;
}
if (argv['hybrid-mock']) {
    ba.isHybridMock = !!argv['hybrid-mock'];
}
ba.skipUpdate = !!argv['skip-update'];


/**
 * 是否打开api mock
 */
if (ba.isServe) {
    ba.isApiMock = true;
}
if (argv['api-mock']) {
    ba.isApiMock = !!argv['api-mock'];
}

/**
 * 是否产出source map
 */
if (!ba.isProd) {
    ba.isSourceMapping = true;
}
if (argv['source-mapping']) {
    ba.isSourceMapping = !!argv['source-mapping'];
}

/**
 * 是否关闭代码检测
 */
if (argv['without-eslint']) {
    ba.withoutEslint = !!argv['without-eslint'];
}


/**
 * 区分平台信息
 */
var platformStr = argv.platform;
ba.platform = {
    ios: platformStr === 'ios',
    android: platformStr === 'android',
    all: !platformStr
};

ba.debug = !!argv.debug;

if (ba.debug) {
    console.log('DEBUG');
    console.log('ba', ba);
}

/**
 * 获取项目名称，以此推断整体项目的目录
 */
if(argv['projectName']){
  ba.projectName = !!argv['projectName'];
}else{
  ba.projectName = 'project';
}

var config_path = path.join(__dirname,"../../",ba.projectName,'.conf.js');
var project_path =  path.join(__dirname,"../../",ba.projectName);
if(fs.existsSync(config_path)){
  ba.projectConfig = require(config_path);
}else{
  ba.projectConfig = {};
  console.log('你没有配置项目文件'.red);
  process.exit(0);
}

ba.projectPath = project_path;

ba.paths = expPath(ba.projectPath);


module.exports = ba;
