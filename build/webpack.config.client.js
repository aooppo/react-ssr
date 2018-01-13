const path = require('path');
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.js')
const isDev = process.env.NODE_ENV === 'development';

const config = webpackMerge(baseConfig, {
	entry : {
		app : path.join(__dirname, '../client/app.js')
	},
	output : {
		filename : '[name].[hash].js',
		path : path.join(__dirname, '../dist'),
		publicPath : '/public/'
	},
	plugins : [
		new HTMLPlugin({
			template : path.join(__dirname, '../client/template.html')
		})
	]
});
if(isDev) {
	config.entry = [
		 'react-hot-loader/patch',
		 path.join(__dirname, '../client/app.js')
	]
	config.devServer = {
		host : '0.0.0.0',
		port : '8888',
		contentBase : path.join(__dirname, '../dist'),
		hot : true,
		overlay : {
			errors : true
		},
		publicPath : '/public/',
		historyApiFallback : {
			index : '/public/index.html'
		}

	}
	config.plugins.push(new webpack.HotModuleReplacementPlugin());

}
module.exports = config;
