import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import history from 'utils/history'
import { routerMiddleware } from 'react-router-redux'
import reducers from 'reducers'

const configureStore = initialState => {
  const middleware = [thunk, routerMiddleware(history)]
  const enhancers = []
  if (process.env.NODE_ENV === 'development') {
    // redux devTools
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }
  const store = createStore(
    combineReducers(reducers),
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
  )
  // https://github.com/reactjs/redux/releases/tag/v2.0.0
  if (module.hot) {
    module.hot.accept('reducers', () => {
      const nextRootReducer = require('reducers').default
      store.replaceReducer(combineReducers(nextRootReducer))
    })
  }

  return store
}

// server side render
const initialState = window.INITIAL_STATE

export default configureStore(initialState)
