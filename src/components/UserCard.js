import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const UserCard = (props) => {
  const { user, selectUser } = props;
  return (
    <Card
      key={user.id}
      hoverable
      style={{ width: 260, margin: 10 }}
      cover={<img alt={user.login} src={user.pictureUrl} />}
      onClick={() => selectUser(user)}
    >
      <Meta
        title={user.login}
        description={user.githubUrl}
      />
    </Card>
  );
};

export default UserCard;
