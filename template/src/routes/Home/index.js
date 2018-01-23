import loadBundle from 'utils/loadBundle'

const HomeAsync = loadBundle(() => import('./components/Intro'))

export default {
  path: '/',
  component: HomeAsync,
  exact: true,
}