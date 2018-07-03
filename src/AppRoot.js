import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AppContainer from 'containers/AppContainer';

import store from 'store/store';

const AppRoot = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={AppContainer} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </Provider>
);

export default AppRoot;
