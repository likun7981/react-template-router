import React from 'react'
import './Intro.less'
import { Alert } from 'antd'

export default () => (
  <Alert
    message={
      <div>
        To get started, edit1
        <code> src/Routes/Home/Intro.js {process.env.REACT_APP_HOST}</code> and
        save to reload.
      </div>
    }
  />
)
