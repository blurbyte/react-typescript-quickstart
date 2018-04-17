import * as React from 'react';
import { shallow } from 'enzyme';

import OrderedList from '../OrderedList';

describe('OrderedList', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<OrderedList />);
    expect(wrapper).toMatchSnapshot();
  });
});
