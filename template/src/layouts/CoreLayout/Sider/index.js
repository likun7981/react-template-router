import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sider.less'

export default () => (
  <div className="sider-container">
    <NavLink exact to="/" activeClassName="sider-active">
      Home
    </NavLink>
    {' · '}
    <NavLink to="/other" activeClassName="sider-active">
      Other
    </NavLink>
  </div>
)
