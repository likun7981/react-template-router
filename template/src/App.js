import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'
import { ConnectedRouter as Router } from 'react-router-redux'
import history from 'utils/history'
import CoreLayout from 'layouts/CoreLayout'
import store from 'configureStore'
import routes from 'routes'

class App extends Component {
  shouldComponentUpdate () {
    return false
  }
  render () {
    return (
      <Provider store={store}>
        <Router history={history}>
          <CoreLayout routes={routes} />
        </Router>
      </Provider>
    )
  }
}

export default hot(module)(App)
