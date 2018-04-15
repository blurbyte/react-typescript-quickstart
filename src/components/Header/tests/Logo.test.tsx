import * as React from 'react';
import { shallow } from 'enzyme';

import Logo from '../Logo';

describe('Logo', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper).toMatchSnapshot();
  });
});
