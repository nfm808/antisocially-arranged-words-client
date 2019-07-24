import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Rules from './Rules';

describe('<Rules />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Rules />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})