import React from 'react';
import {
  Card, Row, Col,
} from 'antd';

import StarIcon from 'react-icons/lib/go/star';

import colors from 'config/colors';

const getColor = language => ((colors[language] && colors[language].color) || 'grey');

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
    <Row type="flex" justify="space-around" align="top">
      {selectedUserRepos.map(repo => (
        <Card
          key={repo.id}
          hoverable
          style={{
            width: 340, height: 180, margin: 10,
          }}
        >
          <Row>
            <div
              className="block-with-text"
              style={{ height: 40, fontSize: 14, color: '#006dd6' }}
            >
              {repo.name}
            </div>
          </Row>
          <Row>
            <div
              className="block-with-text"
              style={{
                height: 120, fontSize: 12, color: '#576068', margin: '8px 0',
              }}
            >
              {repo.description}
            </div>
          </Row>
          <Row>
            <Col
              span={12}
              style={{ color: '#63666d' }}
            >
              <span className="dot" style={{ backgroundColor: getColor(repo.language) }} />
              {repo.language}
            </Col>
            <Col span={6}>
              <StarIcon style={{ paddingRight: 6, width: 20 }} />
              <span style={{ color: '#63666d' }}>
                {repo.starsCount}
              </span>
            </Col>
          </Row>
        </Card>
      ))}
    </Row>
  );
};

export default UserRepositories;
