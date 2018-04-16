import * as React from 'react';
import { shallow } from 'enzyme';

import ManageCounter from '../index';

describe('ManageCounter', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ManageCounter />);
    expect(wrapper).toMatchSnapshot();
  });
});
