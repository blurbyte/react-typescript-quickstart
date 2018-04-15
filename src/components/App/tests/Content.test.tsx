import * as React from 'react';
import { shallow } from 'enzyme';

import Content from '../Content';

describe('Wrapper', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Content />);
    expect(wrapper).toMatchSnapshot();
  });
});
