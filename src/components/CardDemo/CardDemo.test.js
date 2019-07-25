import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CardDemo from './CardDemo';

describe('<CardDemo />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CardDemo />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})