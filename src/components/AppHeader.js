import React from 'react';
import {
  Affix, Menu, Icon, Layout,
} from 'antd';
import { Link } from 'react-router-dom';

import { NonMobile } from 'components/Responsive';

const { Header } = Layout;

const DEFAULT_KEY = 'search-user';

const AppHeader = (props) => {
  const { location, selectedUser } = props;

  const pathSnippets = location.pathname.split('/').filter(i => i);

  const selectedMenuKey = pathSnippets.length
    ? pathSnippets[pathSnippets.length - 1] : DEFAULT_KEY;

  return (
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
  );
};

export default AppHeader;
