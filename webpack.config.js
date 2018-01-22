const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'eval-source-map',	// 配置生成Source Maps，选择合适的选项
	//压缩js
	entry:__dirname + "/js/app.js",	//入口文件
	output: {
		path: __dirname	+ "/js",	//打包后存放的地方,路径
		filename: "bundle.js"		 	//打包后输出的文件名
	},
    plugins: [
        require('autoprefixer')
    ],
	module: {
		loaders : [
			{
				test:	/\.json$/,	//一个匹配loaders所处理的文件的拓展名的正则表达式（必须）
				loader: 'json-loader'
			},
            {
                test: "/\.js$/",
                exclude: /node_modules/,	//手动添加（include）必须处理的文件（文件夹）或屏蔽（exclude）不需要处理的文件（文件夹）（可选）
                loader: 'babel',			//取名字
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader' //这里用了样式分离出来的插件，如果不想分离出来，可以直接这样写 loader:'style!css!sass'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
        ]
	},
    plugins: [
            // 将样式文件独立打包
            new ExtractTextPlugin("styles.css")
        ],
	// 服务器
	devServer: {
		contentBase:'./', // 本地服务器所加载的页面所在的目录
        inline: true,//实时刷新
	    port:9190
	 }
};
//注："__dirname" 是node.js中的一个全局变量，它指向当前执行脚本所在的目录。