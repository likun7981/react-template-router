import loadBundle from 'utils/loadBundle'

const OtherAsync = loadBundle(() => import('./containers/Increase'))

export default {
  path: '/other',
  exact: true,
  component: OtherAsync,
}
