const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');


const baseConfig = (env) => ({
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
	},

	module: {
		rules: [
			{
				test: /\.(t|j)sx?$/,
				exclude: [],
				use: [
					'babel-loader',
				],
			},
			{
				test: /\.s?css$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
		]
	},

	plugins: [
		new webpack.DefinePlugin({
			'NODE_ENV': JSON.stringify(env.type),
			'BUILD_TIME': JSON.stringify((new Date()).toGMTString()),
		})
	]
});

module.exports = baseConfig;