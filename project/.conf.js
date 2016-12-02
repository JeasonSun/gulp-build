module.exports = {
	"livereload": {
		"available": true,
		//开启自动刷新
		"port": 8080,
		"startPath": "html/TmTIndex.html"
	},
	//路径相对于 tasks/plugins 目录
	"plugins": {
		"build_devAfter": [
			"TmTIndex"
		],
		"build_distAfter": [],
		"ftpAfter": [
			"ftp"
		]
	},
	"lazyDir": [
		"../slice"
	],
	//gulp-lazyImageCSS 寻找目录(https://github.com/weixin/gulp-lazyimagecss)

	"supportWebp": false,
	"supportREM": true,
	"supportChanged": false,
	"reversion": true
}
