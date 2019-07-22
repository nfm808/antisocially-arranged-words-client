import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LearnMore from './LearnMore';

describe('<LearnMore />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<LearnMore />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})