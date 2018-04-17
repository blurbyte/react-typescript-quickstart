import * as React from 'react';
import { shallow } from 'enzyme';

import Cell from '../Cell';

describe('Cell', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Cell />);
    expect(wrapper).toMatchSnapshot();
  });
});
