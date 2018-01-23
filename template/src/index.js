import React from 'react'
import ReactDOM from 'react-dom'
import App from 'App'
import registerServiceWorker from 'registerServiceWorker'
import 'assets/styles/core.less'

// some setup
const MOUNT_NODE = document.getElementById('root')

ReactDOM.render(<App />, MOUNT_NODE)

registerServiceWorker()
