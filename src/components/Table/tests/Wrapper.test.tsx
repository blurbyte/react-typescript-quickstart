import * as React from 'react';
import { shallow } from 'enzyme';

import Wrapper from '../Wrapper';

describe('Wrapper', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Wrapper />);
    expect(wrapper).toMatchSnapshot();
  });
});
