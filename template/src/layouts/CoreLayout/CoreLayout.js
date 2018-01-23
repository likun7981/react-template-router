import React from 'react'
import Header from './Header'
import Sider from './Sider'
import { renderRoutes } from 'react-router-config'
import './CoreLayout.less'

export default ({ routes }) => {
  return (
    <div className="core-layout">
      <Header />
      <Sider />
      <div className="core-layout__viewport">{renderRoutes(routes)}</div>
    </div>
  )
}
