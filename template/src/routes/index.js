import loadBundle from 'utils/loadBundle'
import CoreLayout from 'layouts/CoreLayout'
import routerConfig from './config'

export default store => {
  const routes = routerConfig(store)
  return loadBundle(CoreLayout)({ routes })
}
