import React from 'react';
import { Card, Row } from 'antd';

import UserCard from 'components/UserCard';

const UsersList = (props) => {
  const {
    usersList, isSearchingUser, searchTerm, selectUser,
  } = props;

  let cardsContent = [];
  if (!usersList || !usersList.length) {
    if (isSearchingUser) {
      cardsContent = [1, 2, 3, 4, 5]
        .map(k => (<Card key={k} loading style={{ width: 260, margin: 10 }} />));
    } else if (!searchTerm) {
      return (
        <div className="not-found">
          Search for any Github User
        </div>);
    } else {
      return (
        <div className="not-found">
          No user found in search
        </div>);
    }
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
