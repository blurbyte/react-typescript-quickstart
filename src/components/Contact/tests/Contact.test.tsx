import * as React from 'react';
import { shallow } from 'enzyme';

import Contact from '../index';

describe('Contact', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper).toMatchSnapshot();
  });
});
