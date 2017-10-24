import React from 'react';
import RouteWithSubRoutes from 'components/RouteWithSubRoutes';
import reducers from './reducers';

export default store => {
  store.injectAll(reducers); // injectAll this route reducers;
  return ({ routes, location }) => {
    return <RouteWithSubRoutes routes={routes} location={location} />;
  };
};

export const Increase = () => import('./containers/Increase');
