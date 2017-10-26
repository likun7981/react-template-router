
function rewireHotLoader(config, env) {
  if (env === 'development') {
    config.entry.unshift(require.resolve('react-hot-loader/patch'));
  }
  return config;
}

module.exports = rewireHotLoader;
