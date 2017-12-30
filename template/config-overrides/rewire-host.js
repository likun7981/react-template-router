import webpack from 'webpack'

const createRewireHost = function (hostOptions) {
  return function (config, env) {
    if (!process.env.HOST_NAME) {
      return config
    }
    let host = hostOptions[process.env.HOST_NAME]
    if (typeof host === 'object' && !(host instanceof RegExp)) {
      Object.keys(host).forEach(key => {
        host[key] = JSON.stringify(host[key])
      })
    } else {
      host = JSON.stringify(host || '')
    }
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          REACT_APP_HOST: host,
        },
      })
    )
    if (env === 'production') {
      console.log(`⚡️ Build with hostname ${process.env.HOST_NAME}`)
    }
    return config
  }
}

module.exports = createRewireHost
