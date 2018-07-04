import React from 'react';
import {
  Card, Row,
} from 'antd';

import RepoCard from 'components/RepoCard';

const UserRepositories = (props) => {
  const { isLoadingUserRepos, selectedUserRepos } = props;

  if (isLoadingUserRepos) {
    return (
      <Row type="flex" justify="space-between" align="top">
        <Card loading style={{ width: 340, height: 180, margin: 10 }} />
      </Row>
    );
  }

  if (!selectedUserRepos) {
    return (
      <div className="not-found">
        No repositories available
      </div>
    );
  }

  return (
    <Row type="flex" justify="space-between" align="top">
      {selectedUserRepos.map(repo => <RepoCard key={repo.id} repo={repo} />)}
    </Row>
  );
};

export default UserRepositories;
