import React, { Component } from 'react';
import {
  Row, Col, Input, Icon, Divider, Card, Badge,
} from 'antd';

const { Meta } = Card;

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

  onSearch = () => {
    const { searchUser, isSearchingUser } = this.props;
    const { userName } = this.state;
    if (!isSearchingUser) searchUser(userName);
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

  renderUsersList = () => {
    const { usersList, isSearchingUser, searchTerm } = this.props;
    let cardsContent = [];

    if (isSearchingUser) {
      cardsContent = [1, 2, 3, 4, 5]
        .map(k => (<Card key={k} loading style={{ width: 260, margin: 10 }} />));
    } else if (!usersList.length) {
      if (!searchTerm) {
        return (
          <div className="not-found">
            Search for any Github User
          </div>);
      }
      return (
        <div className="not-found">
          No users found
        </div>);
    } else {
      usersList.forEach((user) => {
        cardsContent.push((
          <Card
            key={user.id}
            hoverable
            style={{ width: 260, margin: 10 }}
            cover={<img alt={user.login} src={user.pictureUrl} />}
            onClick={() => this.selectUser(user)}
          >
            <Meta
              title={user.login}
              description={user.githubUrl}
            />
          </Card>
        ));
      });
    }
    return (
      <div style={{ padding: '30px' }}>
        <Row type="flex" justify="start">
          {cardsContent}
        </Row>
      </div>);
  }

  render() {
    const { userName } = this.state;
    const { totalCount } = this.props;

    return (
      <div>
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
              suffix={userName ? <Icon key="postfix" type="close-circle" style={{ marginRight: 5 }} onClick={this.emitEmpty} /> : null}
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
            style={{
              marginLeft: 10,
              backgroundColor: '#fff',
              color: '#999',
              boxShadow: '0 0 0 1px #d9d9d9 inset',
            }}
          />
        </Divider>
        <Row>
          {this.renderUsersList()}
        </Row>
      </div>);
  }
}

export default UserSearch;
