import React from 'react';
import {
  Layout, BackTop,
} from 'antd';
import {
  Switch, Route, Redirect, withRouter,
} from 'react-router-dom';

import UserSearchContainer from 'containers/UserSearchContainer';
import UserProfileContainer from 'containers/UserProfileContainer';

import AppHeader from 'components/AppHeader';
import AppBreadcrumbs from 'components/AppBreadcrumbs';
import AppFooter from 'components/AppFooter';

import './App.css';

const {
  Content,
} = Layout;

const App = (props) => {
  const { match, location, selectedUser } = props;

  return (
    <Layout className="layout">
      <BackTop />
      <AppHeader
        location={location}
        selectedUser={selectedUser}
      />
      <Layout>
        <Layout className="layout">
          <Content className="container">
            <AppBreadcrumbs
              location={location}
            />
            <div className="content">
              <Switch>
                <Route
                  exact
                  path={match.path}
                  component={UserSearchContainer}
                />
                <Route
                  path={`${match.path}user-profile`}
                  component={UserProfileContainer}
                />
                <Redirect to="/" />
              </Switch>
            </div>
          </Content>
          <AppFooter />
        </Layout>
      </Layout>
    </Layout>);
};

export default withRouter(App);
