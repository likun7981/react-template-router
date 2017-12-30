import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createHashHistory'
import reducers from 'reducers'
import createStore from 'store/createStore'
import getRoutes from 'routes'
import App from 'App'
import registerServiceWorker from 'registerServiceWorker'

import 'assets/styles/core.less'

// Create a history of your choosing
// let isConfirmShown = false;
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Store initial
const initialState = window.INITIAL_STATE

export const store = createStore(initialState, [middleware])
export const routes = getRoutes(store)

// InjectAll global reducers;
store.injectAll(reducers)

// some setup
const MOUNT_NODE = document.getElementById('root')

const render = routes => {
  ReactDOM.render(
    <AppContainer>
      <App store={store} routes={routes} history={history} />
    </AppContainer>,
    MOUNT_NODE
  )
}

render(routes)

if (module.hot) {
  module.hot.accept('routes', () => {
    render(require('routes').default(store))
  })
}
registerServiceWorker()
