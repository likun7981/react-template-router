import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

class App extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    const { routes, store, history } = this.props;
    return (
      <Provider store={store}>
        <Router history={history}>{routes}</Router>
      </Provider>
    );
  }
}

export default App;
