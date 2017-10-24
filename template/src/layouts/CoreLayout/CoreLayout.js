import React from 'react';
import Header from './Header';
import Sider from './Sider';
import { withRouter } from 'react-router-dom';
import RouteWithSubRoutes from 'components/RouteWithSubRoutes';
import './CoreLayout.less';

export default withRouter(({ routes, location }) => (
  <div className="core-layout">
    <Header />
    <Sider />
    <div className="core-layout__viewport">
      <RouteWithSubRoutes routes={routes} location={location} />
    </div>
  </div>
));
