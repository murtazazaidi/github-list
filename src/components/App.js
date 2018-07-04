import React from 'react';
import {
  Affix, Layout, Menu, Breadcrumb, Icon, BackTop,
} from 'antd';
import {
  Switch, Route, Redirect, withRouter, Link,
} from 'react-router-dom';

import UserSearchContainer from 'containers/UserSearchContainer';
import UserProfileContainer from 'containers/UserProfileContainer';

import { NonMobile } from 'components/Responsive';

import './App.css';

const {
  Header, Content, Footer,
} = Layout;

const DEFAULT_KEY = 'search-user';

const breadcrumbNameMap = {
  '/user-profile': 'User Profile',
};

class App extends React.Component {
  state = {
    collapsed: true,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  render() {
    const { match, location, selectedUser } = this.props;
    const { collapsed } = this.state; // eslint-disable-line

    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>
            {breadcrumbNameMap[url]}
          </Link>
        </Breadcrumb.Item>
      );
    });

    const breadcrumbItems = [(
      <Breadcrumb.Item key="home">
        <Link to="/">
          <Icon type="home" style={{ marginRight: 6 }} />
          <span>
            Search User
          </span>
        </Link>
      </Breadcrumb.Item>
    )].concat(extraBreadcrumbItems);

    const selectedMenuKey = pathSnippets.length
      ? pathSnippets[pathSnippets.length - 1] : DEFAULT_KEY;

    return (
      <Layout className="layout">
        <BackTop />
        <Affix>
          <Header>
            <div className="logo" />
            <NonMobile>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[DEFAULT_KEY]}
                selectedKeys={[selectedMenuKey]}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key={DEFAULT_KEY}>
                  <Link to="/">
                    <Icon type="search" />
                    <span>
                      Search User
                    </span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="user-profile" disabled={!selectedUser}>
                  <Link to="/user-profile">
                    <Icon type="user" />
                    <span>
                      User Profile
                    </span>
                  </Link>
                </Menu.Item>
              </Menu>
            </NonMobile>
          </Header>
        </Affix>
        <Layout>
          <Layout className="layout">
            <Content className="container">
              <Breadcrumb className="breadcrumbs">
                {breadcrumbItems}
              </Breadcrumb>
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
            <Footer style={{ textAlign: 'center' }}>
              Murtaza Zaidi © 2018
            </Footer>
          </Layout>
        </Layout>
      </Layout>);
  }
}

export default withRouter(App);
