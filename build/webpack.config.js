const path = require('path');


module.exports = {
	entry : {
		app : path.join(__dirname, '../client/app.js')
	},
	output : {
		filename : '[name].[hash].js',
		path : path.join(__dirname, '../dist'),
		publicPath : ''
	},
	module : {
		rules : [
			{
				test : /.jsx$/,
				loader : 'babel-loader'
			}, {
				test : /.js$/,
				loader : 'babel-loader',
				exclude: [
					path.join(__dirname, '../node_modules')
				]
			}
		]
	}
};