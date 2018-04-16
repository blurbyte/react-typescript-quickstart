import * as React from 'react';
import { shallow } from 'enzyme';

import Button from '../index';

describe('Button', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });
});
