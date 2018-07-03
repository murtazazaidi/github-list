import React, { Component } from 'react';
import {
  Badge, Icon, Divider, Row, Col,
} from 'antd';

import UserRepositories from 'components/UserRepositories';

import 'components/UserProfile.css';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    const { selectedUser } = props;
    this.checkPermission(selectedUser);
  }

  componentDidMount() {
    const {
      selectedUser, isLoadingUserRepos, fetchedSelectedUserRepo,
      fetchUser, fetchUserRepos,
    } = this.props;
    this.checkPermission(selectedUser);

    if (selectedUser && !isLoadingUserRepos && !fetchedSelectedUserRepo) {
      fetchUser(selectedUser.login);
      fetchUserRepos(selectedUser.reposUrl);
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
      selectedUser, selectedUserRepos, selectedUserRepoCount, isLoadingUserRepos,
    } = this.props;

    return (
      <div>
        <h1>
          User Profile
        </h1>
        {(selectedUser && (
          <Row type="flex" align="top">
            <Col
              className="profile-image-container"
              xs={24}
              sm={24}
              md={10}
              lg={6}
            >
              <img className="profile-image" alt={selectedUser.login} src={selectedUser.pictureUrl} />
            </Col>
            <Col>
              <a href={selectedUser.githubUrl}>
                <h2>
                  <Icon type="github" style={{ paddingRight: 10 }} />
                  {selectedUser.login}
                </h2>
              </a>
              <span>
                Score:&nbsp;
                {selectedUser.score.toFixed(2)}
              </span>
            </Col>
          </Row>)) || 'User details not available'}
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
        <UserRepositories
          isLoadingUserRepos={isLoadingUserRepos}
          selectedUserRepos={selectedUserRepos}
        />
      </div>);
  }
}

export default UserProfile;
