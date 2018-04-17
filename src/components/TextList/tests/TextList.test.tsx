import * as React from 'react';
import { shallow } from 'enzyme';

import TextList from '../index';

describe('TextList', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<TextList />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly when ordered', () => {
    const wrapper = shallow(<TextList ordered />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly list Item', () => {
    const wrapper = shallow(<TextList.Item />);
    expect(wrapper).toMatchSnapshot();
  });
});
