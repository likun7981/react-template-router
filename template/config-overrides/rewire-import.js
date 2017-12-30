const { injectBabelPlugin } = require('react-rewired-scripts')

module.exports = (config, env) => {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', style: true }],
    config
  )
  return config
}
