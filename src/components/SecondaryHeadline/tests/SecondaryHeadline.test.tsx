import * as React from 'react';
import { shallow } from 'enzyme';

import SecondaryHeadline from '../index';

describe('SecondaryHeadline', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SecondaryHeadline />);
    expect(wrapper).toMatchSnapshot();
  });
});
