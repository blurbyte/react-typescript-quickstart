import * as React from 'react';
import { shallow, mount } from 'enzyme';

import ManageCounter from '../index';
import CurrentValue from '../CurrentValue';

describe('ManageCounter', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ManageCounter />);
    expect(wrapper).toMatchSnapshot();
  });

  it('increases counter value', () => {
    const wrapper = mount(<ManageCounter />);
    wrapper
      .find('button')
      .at(0)
      .simulate('click');
    expect(
      wrapper
        .find(CurrentValue)
        .children()
        .text()
    ).toEqual('12');
  });

  it('prevents decreasing value below initial one', () => {
    const wrapper = mount(<ManageCounter />);
    wrapper
      .find('button')
      .at(1)
      .simulate('click');
    expect(
      wrapper
        .find(CurrentValue)
        .children()
        .text()
    ).toEqual('10');
  });

  it('increases decreases value', () => {
    const wrapper = mount(<ManageCounter />);
    wrapper
      .find('button')
      .at(0)
      .simulate('click');
    wrapper
      .find('button')
      .at(0)
      .simulate('click');
    wrapper
      .find('button')
      .at(1)
      .simulate('click');
    expect(
      wrapper
        .find(CurrentValue)
        .children()
        .text()
    ).toEqual('12');
  });
});
