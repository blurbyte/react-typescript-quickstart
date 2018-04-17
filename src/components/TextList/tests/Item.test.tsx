import * as React from 'react';
import { shallow } from 'enzyme';

import Item from '../Item';

describe('Item', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Item />);
    expect(wrapper).toMatchSnapshot();
  });
});
