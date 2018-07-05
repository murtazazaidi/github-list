import React, { Component } from 'react';
import {
  Button, Row, Col, Input, Icon, Divider, Badge,
} from 'antd';

import UsersList from 'components/UsersList';

const DEFAULT_SEARCH = '';

class UserSearch extends Component {
  constructor(props) {
    super(props);
    const { searchTerm } = props;
    this.state = {
      userName: searchTerm || DEFAULT_SEARCH,
    };
  }

  componentDidMount() {
    const {
      searchUser, isSearchingUser, searchTerm,
    } = this.props;
    const { userName } = this.state;
    if (userName && !isSearchingUser && !searchTerm) searchUser(userName);
  }

  onSearch = (userName, pageNo = 1) => {
    const { searchUser, isSearchingUser, searchTerm } = this.props;
    if (searchTerm === userName && pageNo === 1) return;
    if (!isSearchingUser) searchUser(userName, pageNo);
  }

  onSearchMore = () => {
    const { pageNo } = this.props;
    const { userName } = this.state;
    this.onSearch(userName, pageNo + 1);
  }

  onChange = (e) => {
    this.setState({ userName: e.target.value });
  }

  emitEmpty = () => {
    const { clearSearch, searchTerm } = this.props;
    if (searchTerm) clearSearch();
    this.setState({
      userName: DEFAULT_SEARCH,
    });
  }

  selectUser = (user) => {
    const { updateSelectedUser, selectedUser, history } = this.props;
    if (!selectedUser || selectedUser.id !== user.id) updateSelectedUser(user);
    history.push('/user-profile');
  }

  render() {
    const { userName } = this.state;
    const {
      totalCount, usersList, searchTerm, isSearchingUser,
    } = this.props;

    const showLoadMore = !!(searchTerm && usersList && usersList.length
      && totalCount > usersList.length);

    return (
      <div>
        <div className="page-header">
          <Row>
            <Col xs={24} sm={12} md={6} lg={6}>
              <h1>
                Search User
              </h1>
            </Col>
            <Col
              xs={24}
              sm={12}
              md={{ span: 6, offset: 12 }}
              lg={{ span: 6, offset: 12 }}
            >
              <Input.Search
                placeholder="Enter username"
                prefix={<Icon key="prefix" type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                suffix={userName ? <Icon key="postfix" type="close-circle" style={{ marginRight: 12 }} onClick={this.emitEmpty} /> : null}
                value={userName}
                onChange={this.onChange}
                onSearch={this.onSearch}
                enterButton
              />
            </Col>
          </Row>
          <Divider>
            User
            {totalCount !== 1 ? 's' : ''}
            <Badge
              count={totalCount}
              overflowCount={999999}
              style={{
                marginLeft: 10,
                backgroundColor: '#fff',
                color: '#999',
                boxShadow: '0 0 0 1px #d9d9d9 inset',
              }}
            />
          </Divider>
        </div>
        <Row>
          <UsersList
            selectUser={this.selectUser}
            usersList={usersList}
            isSearchingUser={isSearchingUser}
            searchTerm={searchTerm}
          />
        </Row>
        {showLoadMore && (
          <Row type="flex" justify="space-around">
            <Button
              style={{ margin: 10 }}
              type="primary"
              size="large"
              loading={isSearchingUser}
              onClick={() => (this.onSearchMore())}
            >
              Load More
            </Button>
          </Row>
        )}
      </div>);
  }
}

export default UserSearch;
