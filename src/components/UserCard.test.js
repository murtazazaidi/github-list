import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserCard from './UserCard';

configure({ adapter: new Adapter() });


const selectUser = jest.fn();

it('renders without crashing if user is null', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserCard user={null} selectUser={selectUser} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing if user is not null', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserCard user={{}} selectUser={selectUser} />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('calls selectUser method when clicked on it', () => {
  const component = shallow(<UserCard user={{}} selectUser={selectUser} />);
  component.simulate('click');
  expect(selectUser).toHaveBeenCalled();
});
