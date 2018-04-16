import * as React from 'react';
import { shallow } from 'enzyme';

import Section from '../index';

describe('Section', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Section />);
    expect(wrapper).toMatchSnapshot();
  });
});
