import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import WhiteCard from './WhiteCard';

describe('<WhiteCard />', () => {
  const testCard = {
    id: 1,
    text: 'White Test Card'
  }
  it('renders without crashing', () => {
    const wrapper = shallow(<WhiteCard card={testCard}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})