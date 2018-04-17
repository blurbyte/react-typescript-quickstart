import * as React from 'react';
import { shallow } from 'enzyme';

import SideContentColumn from '../SideContentColumn';

describe('SideContentColumn', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SideContentColumn />);
    expect(wrapper).toMatchSnapshot();
  });
});
