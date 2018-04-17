import * as React from 'react';
import { shallow } from 'enzyme';

import HeadCell from '../HeadCell';

describe('HeadCell', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<HeadCell />);
    expect(wrapper).toMatchSnapshot();
  });
});
