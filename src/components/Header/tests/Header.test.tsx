import * as React from 'react';
import { shallow } from 'enzyme';

import Header from '../index';

describe('Wrapper', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
