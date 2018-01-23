const { paths } = require('react-rewired-scripts')
const config = require(paths.scriptVersion + '/config/webpack.config.dev')
const rewireConfig = require('react-rewired-scripts/lib/config-overrides')

module.exports = {
  webpackConfig: rewireConfig.webpack(config),
  components: 'src/components/**/[A-Z]*.js',
}
