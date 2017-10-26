const rewireLess = require('react-app-rewire-less');
const rewireOptimize = require('react-app-rewire-optimize');
const rewireHost = require('react-app-rewire-host');
const rewireDll = require('./rewire-dll');
const rewireAlias = require('./rewire-alias');
const rewireAntd = require('./rewire-antd');
const rewireHotLoader = require('./rewire-hot-loader');

module.exports = function(config, env) {
  config = rewireAlias(config);
  config = rewireLess(config, env);
  config = rewireDll(config, env);
  config = rewireOptimize(config, env);
  config = rewireAntd(config, env);
  config = rewireHost(config, env, {
    dev: 'http://example.dev.com',
    test: 'http://example.test.com',
    pro: 'http://example.pro.com'
  });
  config = rewireHotLoader(config, env);
  return config;
};
