import * as React from 'react';
import { shallow } from 'enzyme';

import Overview from '../index';

describe('Overview', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Overview />);
    expect(wrapper).toMatchSnapshot();
  });
});
