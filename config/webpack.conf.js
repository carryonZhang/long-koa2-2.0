/**
 * Created by long-mac on 2017/4/5.
 */

var path = require('path');
var webpack = require('webpack');
var undersore = require('underscore');
var fs = require('fs');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var entryPath = path.resolve(__dirname, '../web/views');


var _entris = {
		common: path.join(entryPath, 'common/common.entry.js'),
		index: path.join(entryPath, 'index/index.entry.js'),
		newsdetail: path.join(entryPath, 'news/newsdetail.entry.js')
	},
	_module = {
		rules: [{
			test: /\.vue$/,
			loader: 'vue-loader'
		}, {
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: [/node_modules/, path.join(entryPath, '*/pages/*.js')]
		}, {
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: [
					{
						loader: "css-loader",
						options: {
							modules: false
						}
					}]
			})
		}]
	},
	_resolve = {
		modules: [
			"node_modules",
			path.resolve(__dirname, entryPath)
		],
		alias: {
			sidebar: path.resolve(__dirname, '../web/widget/sidebar/sidebar.js')
		},
		extensions: [".vue", ".js"]
	};
// _babel = {
//     presets: ['es2015', 'stage-0'],
//     plugins: ['transform-vue-jsx', 'transform-runtime']
// };
var _devRules = undersore.clone(_module.rules);
var _prodRules = undersore.clone(_module.rules);
_devRules.push({
	test: /\.(png|jpe?g|gif|eot|woff|woff2|ttf|svg)$/,
	use: 'file-loader?name=assets/images/[name].[ext]'
});
_prodRules.push({
	test: /\.(png|jpe?g|gif|eot|woff|woff2|ttf|svg)$/,
	use: 'file-loader?name=assets/images/[name].[hash:5].[ext]'
	// loaders: [
	// 	'file-loader?name=assets/images/[name].[hash:5].[ext]',
	// 	{
	// 		loader: 'image-webpack-loader',
	// 		query: {
	// 			optimizationLevel: 7
	// 		}
	// 	}
	// ]
});

// var sourcemap = process.env.NODE_ENV === 'dev' ? 'cheap-eval-source-map' : 'source-map';

// console.log('sourcemap', sourcemap)

var webpackConfig = {
	dev: {
		entry: _entris,
		module: {
			rules: _devRules
		},
		resolve: _resolve,
	},
	prod: {
		entry: _entris,
		module: {
			rules: _prodRules
		},
		resolve: _resolve,
	}
};
module.exports = webpackConfig;

// module.exports = {
//     context: path.resolve(__dirname, './src'),
//     entry: {
//         app: './app.js',
//     },
//     // target: 'node',
//     // node: {
//     //     __filename: true,
//     //     __dirname: true,
//     // },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 loader: 'babel-loader',
//                 // use: [{
//                 //     loader: 'babel-loader',
//                 //     options: { presets: ['es2015'] },
//                 // }],
//             },
//
//             // Loaders for other file types can go here
//         ],
//     },
//     output: {
//         path: path.resolve(__dirname, './build'),
//         filename: '[name].bundle.js',
//     },
//     resolve: {
//         modules: [path.resolve(__dirname, './src'), 'node_modules'],
//         // extensions: []
//         // alias: {
//         //
//         // },
//     },
//     // devtool: "cheap-eval-source-map",
//     plugins: [
//         new webpack.HotModuleReplacementPlugin(),
//     ],
// };
