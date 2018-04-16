import * as React from 'react';
import { shallow } from 'enzyme';

import Content from '../Content';

describe('Content', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Content />);
    expect(wrapper).toMatchSnapshot();
  });
});
