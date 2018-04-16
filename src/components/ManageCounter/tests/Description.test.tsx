import * as React from 'react';
import { shallow } from 'enzyme';

import Description from '../Description';

describe('Description', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Description />);
    expect(wrapper).toMatchSnapshot();
  });
});
