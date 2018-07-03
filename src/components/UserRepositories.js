import React from 'react';
import {
  Card, Row, Col, Icon,
} from 'antd';

import { shorten } from 'utils/stringUtils';

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
    <Row type="flex" justify="start" align="top">
      {selectedUserRepos.map(repo => (
        <Card
          key={repo.id}
          hoverable
          style={{
            width: 340, height: 180, margin: 10,
          }}
        >
          <Row style={{ height: 20 }}>
            <span style={{ fontSize: 14, color: '#006dd6' }}>
              {repo.name}
            </span>
          </Row>
          <Row style={{ height: 70, margin: '8px 0' }}>
            <span className="truncate" style={{ fontSize: 12, color: '#576068' }}>
              {shorten(repo.description)}
            </span>
          </Row>
          <Row style={{ height: 20 }}>
            <Col
              span={12}
              style={{ color: '#63666d' }}
            >
              <span className="dot" style={{ backgroundColor: getColor(repo.language) }} />
              {repo.language}
            </Col>
            <Col span={6}>
              <Icon type="star-o" style={{ paddingRight: 6 }} />
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
