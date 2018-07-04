import React from 'react';
import { Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom';

const breadcrumbNameMap = {
  '/user-profile': 'User Profile',
};

const AppBreadcrumbs = (props) => {
  const { location } = props;
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

  return (
    <Breadcrumb className="breadcrumbs">
      {breadcrumbItems}
    </Breadcrumb>
  );
};

export default AppBreadcrumbs;
