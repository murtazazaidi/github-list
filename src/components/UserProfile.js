import React, { Component } from 'react';
import {
  Badge, Icon, Divider, Row, Col, Card,
} from 'antd';

import MailIcon from 'react-icons/lib/go/mail';
import LocationIcon from 'react-icons/lib/go/location';
import OrganizationIcon from 'react-icons/lib/go/organization';
import LinkIcon from 'react-icons/lib/go/link';

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
      selectedUser,
      isLoadingUser, fetchedSelectedUser,
      isLoadingUserRepos, fetchedSelectedUserRepos,
      fetchUser, fetchUserRepos,
    } = this.props;
    this.checkPermission(selectedUser);

    if (selectedUser && !isLoadingUserRepos && !fetchedSelectedUserRepos) {
      if (!isLoadingUser && !fetchedSelectedUser) fetchUser(selectedUser.login);
      if (!isLoadingUserRepos && !fetchedSelectedUserRepos) fetchUserRepos(selectedUser.reposUrl);
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
    } = this.props;

    return (
      <div>
        <div className="page-header">
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
                {!isLoadingUser && (
                  <h2>
                      {selectedUser.name}
                  </h2>)}
                <a target="_blank" rel="noopener noreferrer" href={selectedUser.githubUrl}>
                  <h3>
                    <Icon type="github" className="profile-icon" />
                    <span className="profile-username">
                      {selectedUser.login}
                    </span>
                  </h3>
                </a>
                {isLoadingUser && (
                  <Card loading bordered={false} bodyStyle={{ padding: '10px 0' }} />
                )}
                {!isLoadingUser && (
                  <div>
                    <div>
                      {selectedUser.bio}
                    </div>
                    <Divider />
                    {selectedUser.location && (
                      <div>
                        <LocationIcon />&nbsp;
                        {selectedUser.location}
                      </div>)}
                    {selectedUser.company && (
                      <div>
                        <OrganizationIcon />&nbsp;
                        {selectedUser.company}
                      </div>)}
                    {selectedUser.email && (
                      <div>
                        <MailIcon />&nbsp;
                        <a href={`mailto:${selectedUser.email}`}>
                          {selectedUser.email}
                        </a>
                      </div>)}
                    {selectedUser.blog && (
                      <div>
                        <LinkIcon />&nbsp;
                        <a target="_blank" rel="noopener noreferrer" href={selectedUser.blog}>
                          {selectedUser.blog}
                        </a>
                      </div>)}
                    <div>
                      Repositories:&nbsp;
                      {selectedUser.publicRepos}
                    </div>
                    <div>
                      Gists:&nbsp;
                      {selectedUser.publicGists}
                    </div>
                    <div>
                      Followers:&nbsp;
                      {selectedUser.followers}
                    </div>
                    <div>
                      Following:&nbsp;
                      {selectedUser.following}
                    </div>
                  </div>
                )}
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
        </div>
        <UserRepositories
          isLoadingUserRepos={isLoadingUserRepos}
          selectedUserRepos={selectedUserRepos}
        />
      </div>);
  }
}

export default UserProfile;
