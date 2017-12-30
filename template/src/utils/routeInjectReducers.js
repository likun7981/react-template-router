import React from 'react'
import RouteWithSubRoutes from 'components/RouteWithSubRoutes'

export default (store, type) => () => {
  return import(`routes/${type}/reducers`).then(reducers => {
    store.injectAll(reducers.default)
    return ({ routes, location }) => (
      <RouteWithSubRoutes routes={routes} location={location} />
    )
  })
}
