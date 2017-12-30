import { getBabelLoader } from 'react-rewired-scripts'

module.exports= function rewireHotLoader (config, env) {
  const babelLoader = getBabelLoader(config.module.rules)
  babelLoader.options.plugins = ['react-hot-loader/babel']
  config.entry.unshift(require.resolve('react-hot-loader/patch'))
  return config
}
