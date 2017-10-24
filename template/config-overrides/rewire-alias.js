const rewireAlias = config => {
  config.resolve.alias = Object.assign({}, config.resolve.alias, {
    'rc-animate': 'rc-animate-v16'
  });
  return config;
};

module.exports = rewireAlias;
