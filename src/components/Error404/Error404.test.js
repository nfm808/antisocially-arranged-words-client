import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Error404 from '../LandingPage';

describe('<Error404 />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Error404 />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})