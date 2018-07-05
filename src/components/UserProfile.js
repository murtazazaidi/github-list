import React, { Component } from 'react';
import {
  Badge, Button, Divider, Row,
} from 'antd';

import UserDetails from 'components/UserDetails';
import UserRepositories from 'components/UserRepositories';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    const { selectedUser } = props;
    this.checkPermission(selectedUser);
  }

  componentDidMount() {
    const {
      selectedUser,
      isLoadingUser, fetchedSelectedUser,
      isLoadingUserRepos, fetchedSelectedUserReposOnce,
      fetchUser, fetchUserRepos,
    } = this.props;
    this.checkPermission(selectedUser);

    if (selectedUser && !isLoadingUserRepos && !fetchedSelectedUserReposOnce) {
      if (!isLoadingUser && !fetchedSelectedUser) fetchUser(selectedUser.login);
      if (!isLoadingUserRepos && !fetchedSelectedUserReposOnce) {
        fetchUserRepos(selectedUser.reposUrl);
      }
    }
  }

  checkPermission = (selectedUser) => {
    const { history } = this.props;
    if (!selectedUser && history.location.pathname !== '/') {
      history.push('/');
    }
  }

  render() {
    const {
      selectedUser, selectedUserRepos, selectedUserRepoCount,
      isLoadingUser, isLoadingUserRepos,
      fetchUserRepos, pageNo, pageSize,
    } = this.props;

    const showLoadMore = !!selectedUserRepoCount && selectedUserRepos
      && !!selectedUserRepos.length
      && selectedUserRepoCount > pageNo * pageSize;

    return (
      <div>
        <div className="page-header">
          <h1>
            User Profile
          </h1>
          <UserDetails
            isLoadingUser={isLoadingUser}
            selectedUser={selectedUser}
          />
          <Divider>
            Repositories
            <Badge
              count={selectedUserRepoCount}
              style={{
                marginLeft: 10,
                backgroundColor: '#fff',
                color: '#999',
                boxShadow: '0 0 0 1px #d9d9d9 inset',
              }}
            />
          </Divider>
        </div>
        <UserRepositories
          isLoadingUserRepos={isLoadingUserRepos}
          selectedUserRepos={selectedUserRepos}
        />
        {showLoadMore && (
          <Row type="flex" justify="space-around">
            <Button
              style={{ margin: 10 }}
              type="primary"
              size="large"
              loading={isLoadingUserRepos}
              onClick={() => (fetchUserRepos(selectedUser.reposUrl, pageNo + 1))}
            >
              Load More
            </Button>
          </Row>
        )}
      </div>);
  }
}

export default UserProfile;
