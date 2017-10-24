const webpack = require('webpack');
const path = require('path');
const config = require('./config');

const vendors = config.dll;
const contextpath = config.mainfestContext;

module.exports = {
  output: {
    path: config.libPath,
    filename: '[name].js',
    library: '[name]'
  },
  entry: {
    vendors,
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(contextpath, 'mainfest.[name].json'),
      name: '[name]',
      context: contextpath
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
        drop_console: true,
        comparisons: false,
      },
      output: {
        comments: false,
        // Turned on because emoji and regex is not minified properly using default
        // https://github.com/facebookincubator/create-react-app/issues/2488
        ascii_only: true,
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['common']
    })
  ]
};
