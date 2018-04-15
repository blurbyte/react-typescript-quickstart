import * as React from 'react';
import { shallow } from 'enzyme';

import Banner from '../Banner';

describe('Banner', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Banner />);
    expect(wrapper).toMatchSnapshot();
  });
});
