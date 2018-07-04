import React from 'react';
import ReactDOM from 'react-dom';
import RepoCard from './RepoCard';

it('renders without crashing if repo is null', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RepoCard repo={null} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing if repo is not null', () => {
  const div = document.createElement('div');
  const repo = {
    id: 1,
    url: '',
    name: 'Name',
    description: 'The Description',
  };
  ReactDOM.render(<RepoCard repo={repo} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing if repo name and description are too long', () => {
  const div = document.createElement('div');
  const repo = {
    id: 1,
    url: '',
    language: 'Python',
    name: 'More than 36 character long repository name to make sure it stretches',
    description: 'More than 192 character long repository name to make sure it stretches. More than 192 character long repository name to make sure it stretches. More than 192 character long repository name to make sure it stretches. More than 192 character long repository name to make sure it stretches. More than 192 character long repository name to make sure it stretches.',
  };
  ReactDOM.render(<RepoCard repo={repo} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
