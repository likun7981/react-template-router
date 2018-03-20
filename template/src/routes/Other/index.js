import loadable from 'react-rewire-hot-loader/lib/loadable'

const OtherAsync = loadable(() => import('./containers/Increase'))

export default {
  path: '/other',
  exact: true,
  component: OtherAsync,
}
