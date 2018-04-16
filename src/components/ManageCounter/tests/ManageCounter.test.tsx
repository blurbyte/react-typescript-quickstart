import * as React from 'react';
import { shallow, mount } from 'enzyme';

import ManageCounter from '../index';
import CurrentValue from '../CurrentValue';

describe('ManageCounter', () => {
  const props = {
    initialCount: 12,
    step: 4
  };

  it('renders correctly', () => {
    const wrapper = shallow(<ManageCounter {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('increases counter value', () => {
    const wrapper = mount(<ManageCounter {...props} />);
    wrapper
      .find('button')
      .at(0)
      .simulate('click');
    expect(
      wrapper
        .find(CurrentValue)
        .children()
        .text()
    ).toEqual('16');
  });

  it('prevents decreasing value below initial one', () => {
    const wrapper = mount(<ManageCounter {...props} />);
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

  it('increases decreases value', () => {
    const wrapper = mount(<ManageCounter {...props} />);
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
    ).toEqual('16');
  });
});
