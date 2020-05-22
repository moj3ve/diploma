const fs = require("fs");
const path = require("path");

const webpackConfig = require("./webpack/");

module.exports = (env) => webpackConfig({
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
})(env);