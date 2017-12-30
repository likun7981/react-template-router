const { compose } = require('react-rewired-scripts')
const rewireLess = require('react-rewire-less')

const rewireHost = require('./rewire-host')
const rewireImport = require('./rewire-import')
const rewireHotLoader = require('./rewire-hot-loader')

export default compose(
  rewireLess,
  rewireHotLoader,
  rewireImport,
  rewireHost({
    dev: 'http://example.dev.com',
    test: 'http://example.test1111.com',
    pro: 'http://example.pro.com',
  })
)
