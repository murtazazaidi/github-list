import React from 'react';

import {
  Card, Row, Col, Tooltip,
} from 'antd';

import StarIcon from 'react-icons/lib/go/star';

import { shorten } from 'utils/stringUtils';

import colors from 'config/colors';

const maxTextLength = {
  REPO_NAME: 36,
  REPO_DESCRIPTION: 192,
};

const getColor = language => ((colors[language] && colors[language].color) || 'grey');

// Returns either the full text if text length is less than maxLength
// or truncates the text but wraps it inside a tooltip
const getTooltippedText = (text, maxLength) => {
  if (text && text.length <= maxLength) return text;
  return (
    <Tooltip title={text}>
      {shorten(text, maxLength)}
    </Tooltip>);
};


const RepoCard = (props) => {
  const { repo } = props;

  if (!repo) return <div />;

  return (
    <a key={repo.id} target="_blank" rel="noopener noreferrer" href={repo.url}>
      <Card
        hoverable
        style={{
          width: 340, height: 180, margin: 10,
        }}
      >
        <Row>
          <div
            style={{ height: 20, fontSize: 14, color: '#006dd6' }}
          >
            {getTooltippedText(repo.name, maxTextLength.REPO_NAME)}
          </div>
        </Row>
        <Row>
          <div
            style={{
              height: 80, fontSize: 12, color: '#576068', margin: '8px 0',
            }}
          >
            {getTooltippedText(repo.description, maxTextLength.REPO_DESCRIPTION)}
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
    </a>
  );
};

export default RepoCard;
