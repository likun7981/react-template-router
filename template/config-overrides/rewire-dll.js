const webpack = require('webpack');
const path = require('path');

const contextpath = require('./config').mainfestContext;

function rewireDll(config, env) {
  if (env === 'production') {
    config.plugins = (config.plugins || []).concat(
      new webpack.DllReferencePlugin({
        context: contextpath,
        manifest: require(path.join(contextpath, 'mainfest.common.json'))
      }),
      new webpack.DllReferencePlugin({
        context: contextpath,
        manifest: require(path.join(contextpath, 'mainfest.vendors.json'))
      })
    );
  }

  return config;
}

module.exports = rewireDll;
