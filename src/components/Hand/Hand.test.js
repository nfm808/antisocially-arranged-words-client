import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Hand from '../LandingPage';

describe('<Hand />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Hand />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})