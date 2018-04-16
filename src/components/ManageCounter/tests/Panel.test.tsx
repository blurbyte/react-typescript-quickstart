import * as React from 'react';
import { shallow } from 'enzyme';

import Panel from '../Panel';

describe('Panel', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper).toMatchSnapshot();
  });
});
