import NotFound from 'components/NotFound'
import loadBundle from 'utils/loadBundle'
import injectReducers from 'utils/routeInjectReducers'

import { Increase } from './other'
import Home from './home'

const routeConfig = store => [
  {
    path: '/',
    component: loadBundle(Home),
    exact: true,
  },
  {
    path: '/other',
    component: loadBundle(injectReducers(store, 'other')),
    routes: [
      {
        path: '/other',
        exact: true,
        component: loadBundle(Increase),
      },
    ],
  },
  {
    path: '*',
    component: NotFound,
  },
]

export default routeConfig
