var path = require('path')

module.exports = {
	entry: ['mocha!./tests/index.js'],
	output: {
		filename: './tests/testBundle.js',
	},
	module: {
		loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
				exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
	jshint: {
		esversion: 6,
		asi: true
	},
  resolve: {
    extensions: ['.js', ''],
		alias: {
			services: path.resolve('./app/services'),
			classes: path.resolve('./app/classes'),
		}
  }
};
