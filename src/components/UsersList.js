import React from 'react';
import { Card, Row } from 'antd';

import UserCard from 'components/UserCard';

const UsersList = (props) => {
  const {
    usersList, isSearchingUser, searchTerm, selectUser,
  } = props;

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
      cardsContent.push(<UserCard key={user.id} user={user} selectUser={selectUser} />);
    });
  }
  return (
    <div>
      <Row type="flex" justify="space-around">
        {cardsContent}
      </Row>
    </div>);
};

export default UsersList;
