/**
 * Created by long-mac on 2017/4/9.
 */
/**
 *@Description 开发环境Webpack配置项
 */
var path = require('path');
var conf = require('./webpack.conf');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var options = {
	output: {
		path: path.join(__dirname, '../build'),
		publicPath: '/',
		filename: 'assets/scripts/[name].bundle.js'
	},
	plugins: [
		new webpack.ProvidePlugin({
			Vue: ['vue/dist/vue.esm.js', 'default']
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"dev"'
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'assets/scripts/[name].bundle.js',
			// minChunks: Infinity
		}),
		new HtmlWebpackPlugin({
			template: './web/views/common/pages/common.html',
			filename: './views/common/pages/common.html',
			inject: false
		}),
		new HtmlWebpackPlugin({
			template: './web/views/index/pages/index.js',
			filename: './views/index/pages/index.html',
			inject: false,
			chunks: ['vendor', 'common', 'index']
		}),
		new HtmlWebpackPlugin({
			template: './web/widget/sidebar/sidebar.html',
			filename: './widget/sidebar/sidebar.html',
			inject: false
		}),
		new HtmlWebpackPlugin({
			template: './web/widget/activity/activity.html',
			filename: './widget/activity/activity.html',
			inject: false
		}),
		new HtmlWebpackPlugin({
			template: './web/views/error/pages/404.html',
			filename: './views/error/pages/404.html',
			inject: false
		}),
		new HtmlWebpackPlugin({
			template: './web/views/error/pages/500.html',
			filename: './views/error/pages/500.html',
			inject: false
		}),
		new ExtractTextPlugin("assets/styles/[name].css"),
	],
}

var _options = Object.assign(options, conf.dev)
module.exports = _options;