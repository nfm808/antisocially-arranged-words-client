import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import GameRoom from './GameRoom';

describe('<GameRoom />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<GameRoom />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})
