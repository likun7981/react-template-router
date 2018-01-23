import { compose, injectBabelPlugins } from 'react-rewired-scripts'
import rewireLess from 'react-rewire-less'
import rewireEnv from 'react-rewire-env'

export default compose(
  rewireLess,
  injectBabelPlugins(
    ['import', { libraryName: 'antd', style: true }],
    'react-hot-loader/babel'
  ),
  rewireEnv({
    dev: 'http://example.dev.com',
    test: 'http://example.test.com',
    prod: 'http://example.pro.com',
  })
)
