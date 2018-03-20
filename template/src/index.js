import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from 'App'
import registerServiceWorker from 'registerServiceWorker'
import store from 'configureStore'
import 'assets/styles/core.less'

// some setup
const MOUNT_NODE = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  MOUNT_NODE
)

registerServiceWorker()
