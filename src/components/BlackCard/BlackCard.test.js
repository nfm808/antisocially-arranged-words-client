import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import BlackCard from './BlackCard';

describe('<BlackCard />', () => {
  const testCard = {
    id: 1,
    text:'test card text'
  }
  it('renders without crashing', () => {
    const wrapper = shallow(<BlackCard card={testCard}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})