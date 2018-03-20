import loadable from 'react-rewire-hot-loader/lib/loadable'

const HomeAsync = loadable(() => import('./components/Intro'))

export default {
  path: '/',
  component: HomeAsync,
  exact: true,
}
