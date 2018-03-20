import { compose, injectBabelPlugins } from 'react-rewired-scripts'
import rewireLess from 'react-rewire-less'
import rewireEnv from 'react-rewire-env'
import rewireHotLoader from 'react-rewire-hot-loader'

export default compose(
  rewireLess,
  injectBabelPlugins(
    ['import', { libraryName: 'antd', style: true }],
  ),
  rewireEnv({
    dev: 'http://example.dev.com',
    test: 'http://example.test.com',
    prod: 'http://example.pro.com',
  }),
  rewireHotLoader,
)
