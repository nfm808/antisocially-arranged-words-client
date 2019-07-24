import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CreateGame from './CreateGame';

describe('<CreateGame />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CreateGame />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})