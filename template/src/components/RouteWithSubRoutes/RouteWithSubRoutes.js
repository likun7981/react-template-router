import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Animate from 'rc-animate'
import './RoutesWithSubRoutes.less'

// if you not use animate, you can use the offical renderRoutes
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
export default ({ location, routes }) => {
  return (
    <Animate
      transitionEnter={false}
      component="div"
      transitionName={{
        leave: 'animate-leave',
        leaveActive: 'animate-leave-active',
      }}
    >
      <Switch key={location.pathname} location={location}>
        {routes.map(
          ({ path, exact, component: Component, routes = [] }, index) => {
            return (
              <Route
                key={index}
                path={path}
                exact={exact}
                render={props => <Component {...props} routes={routes} />}
              />
            )
          }
        )}
      </Switch>
    </Animate>
  )
}
