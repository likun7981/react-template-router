import { applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { routerReducer } from 'react-router-redux'
import createStore from './createInjectableStore'

const createFinalStore = (initialState, middlewares) => {
  const middleware = [thunk].concat(middlewares)

  const enhancers = []

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  const store = createStore(
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers),
    {
      router: routerReducer,
    }
  )

  return store
}

export default createFinalStore
