import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import CoreLayout from 'layouts/CoreLayout'
import { ConnectedRouter as Router } from 'react-router-redux'
import history from 'utils/history'
import routes from 'routes'

class App extends Component {
  shouldComponentUpdate () {
    return false
  }
  render () {
    return (
      <Router history={history}>
        <CoreLayout routes={routes} />
      </Router>
    )
  }
}

export default hot(module)(App)
