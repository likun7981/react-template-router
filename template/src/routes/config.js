import loadBundle from 'utils/load-bundle';
import Other, { Increase } from './Other';

import Home from './Home';

const routeConfig = store => [
  {
    path: '/',
    component: loadBundle(Home),
    exact: true
  },
  {
    path: '/other',
    component: Other(store),
    routes: [
      {
        path: '/other',
        exact: true,
        component: loadBundle(Increase)
      }
    ]
  }
];

export default routeConfig;
